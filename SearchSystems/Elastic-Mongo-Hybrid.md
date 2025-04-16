Creating a HLD where for our product filtering in our `e-commerce` where the single source of our truth is mongo-db but making filter and text-search will make the query slow to increase the read speed, we integrate elastic search which will only store the fields which are used for filtering and to show on the dashboard.

We will use mongo  `watch streams` to trigger the update on the mongodb when any write happens on mongo-db. also the data stores in elastic is `de-normalised` to increase it more. It also unlocks fuzzy-search.

``Storing data in both MongoDB and Elasticsearch exemplifies the Separation of Concerns design principle, where MongoDB serves as the source of truth for data persistence and integrity, while Elasticsearch handles fast, flexible search and filtering—each system focusing on its specialized responsibility without overlapping concerns``
