# Elasticsearch Deep Dive: CRUD, Boolean Queries, and Fuzzy Matching

## Table of Contents
- [Boolean Queries Explained](#boolean-queries-explained)
- [CRUD Operations](#crud-operations)
- [Fuzzy Matching Internals](#fuzzy-matching-internals)
- [Indexing Process](#indexing-process)

## Boolean Queries Explained

Boolean queries (`bool`) in Elasticsearch allow you to combine multiple query clauses. Think of it as SQL's WHERE clause but more powerful.

### Bool Query Components

1. **must**: Like AND operator
   - All conditions must match
   - Contributes to score

2. **should**: Like OR operator
   - At least one should match
   - Improves relevance score

3. **must_not**: Like NOT operator
   - Conditions must not match
   - Doesn't affect score

4. **filter**: Like must but without scoring
   - More efficient than must
   - Cached automatically

### Examples:

```json
GET /my_index/_search
{
  "query": {
    "bool": {
      "must": [
        { "match": { "title": "elasticsearch" }},
        { "range": { "price": { "gte": 10 }}}
      ],
      "should": [
        { "match": { "description": "database" }},
        { "match": { "tags": "search" }}
      ],
      "must_not": [
        { "term": { "status": "deleted" }}
      ],
      "filter": [
        { "term": { "published": true }}
      ]
    }
  }
}
```

## CRUD Operations

### Create (Index) Document

```json
// Single Document
PUT /products/_doc/1
{
  "name": "iPhone",
  "price": 999,
  "description": "Smartphone"
}

// Bulk Indexing
POST /_bulk
{"index": {"_index": "products", "_id": "1"}}
{"name": "iPhone", "price": 999}
{"index": {"_index": "products", "_id": "2"}}
{"name": "iPad", "price": 799}
```

#### Behind the Scenes:
1. Document received by node
2. Primary shard determined
3. Document routed to primary shard
4. Document indexed and replicated
5. Success acknowledged

### Read (Search) Document

```json
// Get by ID
GET /products/_doc/1

// Search with query
GET /products/_search
{
  "query": {
    "match": {
      "name": "iPhone"
    }
  }
}
```

#### Behind the Scenes:
1. Query received by coordinator node
2. Broadcasts to all shards (primary/replica)
3. Shards execute search locally
4. Results merged and sorted
5. Final results returned

### Update Document

```json
POST /products/_update/1
{
  "doc": {
    "price": 899
  }
}
```

#### Behind the Scenes:
1. Retrieve current document
2. Modify fields
3. Delete old document
4. Index new document
5. Replicate changes

### Delete Document

```json
DELETE /products/_doc/1
```

#### Behind the Scenes:
1. Mark document as deleted
2. Document not immediately removed
3. Space reclaimed during segment merging

## Fuzzy Matching Internals

### How Fuzzy Matching Works

1. **Levenshtein Distance**
   ```text
   kitten → sitten (1 change)
   sitten → sitting (2 changes)
   ```

2. **Implementation Details**:
```json
GET /products/_search
{
  "query": {
    "match": {
      "name": {
        "query": "phne",
        "fuzziness": "AUTO",
        "prefix_length": 1
      }
    }
  }
}
```

#### Behind the Scenes:
1. Generate variations within fuzziness limit
2. Build OR query for all variations
3. Calculate score based on edit distance
4. Return matched documents

### Fuzzy Algorithm Steps

1. **Term Generation**:
```text
Original: "phne"
Variations with fuzziness=2:
- phone
- phony
- phoned
...and more
```

2. **Optimization Techniques**:
   - Prefix optimization
   - Maximum expansions
   - Edge ngram indexing

## Indexing Process

### 1. Document Processing Pipeline

```text
Document → Analysis → Tokens → Inverted Index
```

#### Example:
```json
{
  "title": "Quick brown fox"
}
↓ Analysis
[
  "quick",
  "brown",
  "fox"
]
↓ Inverted Index
quick → doc1
brown → doc1
fox → doc1
```

### 2. Segment Management

```text
New Documents → Memory Buffer → Segment → Merge
```

#### Process:
1. Documents collected in memory buffer
2. Buffer flushed to segment
3. Segments periodically merged
4. Old segments removed

### 3. Custom Analyzer Example

```json
PUT /my_index
{
  "settings": {
    "analysis": {
      "analyzer": {
        "my_custom_analyzer": {
          "type": "custom",
          "tokenizer": "standard",
          "filter": [
            "lowercase",
            "my_custom_filter"
          ]
        }
      },
      "filter": {
        "my_custom_filter": {
          "type": "edge_ngram",
          "min_gram": 2,
          "max_gram": 10
        }
      }
    }
  }
}
```

## Performance Optimization

### 1. Indexing Optimization

```json
PUT /my_index/_settings
{
  "index": {
    "refresh_interval": "30s",
    "number_of_replicas": 1,
    "translog": {
      "durability": "async"
    }
  }
}
```

### 2. Search Optimization

```json
GET /my_index/_search
{
  "query": {
    "bool": {
      "filter": [
        {"term": {"status": "active"}}
      ],
      "must": [
        {"match": {"title": "search"}}
      ]
    }
  },
  "_source": ["title", "price"],
  "size": 100
}
```

## Memory Management

### Field Data Settings
```json
PUT /my_index/_mapping
{
  "properties": {
    "title": {
      "type": "text",
      "fielddata": true,
      "fielddata_frequency_filter": {
        "min": 0.001,
        "max": 0.1,
        "min_segment_size": 500
      }
    }
  }
}
```

## Monitoring and Maintenance

### Cluster Health
```json
GET /_cluster/health
GET /_cat/indices?v
GET /_cat/shards?v
```

### Index Lifecycle
```json
PUT _ilm/policy/my_policy
{
  "policy": {
    "phases": {
      "hot": {
        "actions": {
          "rollover": {
            "max_size": "50GB",
            "max_age": "30d"
          }
        }
      },
      "warm": {
        "min_age": "30d",
        "actions": {
          "shrink": {
            "number_of_shards": 1
          }
        }
      }
    }
  }
}
```

Would you like me to elaborate on any of these sections or provide more specific examples?