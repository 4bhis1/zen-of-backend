# What is a Search Engine? | How it differs from a traditional DB


Search Engines are software systems that are used to crawl, index and retrieve the data when asked. The main three components are `Crawler`,`Indexer`, and `Query Processor`.

### Crawler

* Crawler looks over the the URLS list added in the queue.
* Crawler sends HTTP requests to fetch meta-data of webpages. Also fetches all the linkes form the page and normalizes the url (relative urls of the page).
* Filter out URLS not needed and add rest of the urls in the link.
* Maintains a databse of already crawled URLS. and avoid crawling of the same content. 
* Updates the search engine's index and maintains the metadata about crawl status.
* Implements delays between requests to same domain
* Implements delays between requests to same domain

### Indexer

It organizes the raw data collected from crawlers into searchable format.
* `Tokenization` - Breaks text into indivisual words.
* `Normalization` - Converts into LowerCase, Remove Punctuations, Special Characters.
* `Stop Word Removal` - Remove common and helping verbs like (the, is, at)
* `Stemming` - Reduce words to their root form 
    (running - run)
* Created Inverted Index 
```

"python" → [
    {docId: 1, positions: [5, 10, 45], freq: 3, weight: 0.8},
    {docId: 4, positions: [2, 23], freq: 2, weight: 0.6},
    ...
]

"programming" → [
    {docId: 1, positions: [6, 46], freq: 2, weight: 0.7},
    {docId: 2, positions: [1], freq: 1, weight: 0.4},
    ...
]

```

### Query Processor 
Reads the index created by Indexer.

# Traditional Database
They store the information in table, i.e row and column wise.