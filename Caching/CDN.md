# CDN

Content Delivery Netwriks are the services spread over world-wide and helps you bring the static data from neartest geogrpahical CDN to you.

### PoPs (Points of presence)

apart from holding and caching data at one place they distributed evenly on variosu servers as well

## How CDN work

1. Request is made to fetch a file.
2. Nearest CDN check whether it's in cache or not, 
    - If it exists sends to the user (suprer-fast)
3. Else make a request to the main Server(your server) fetched the data and caches it and delivers to the user (Perfect example of `lazy cahing`).


### Caching Mechanisms
1. TTL
2. Cache Invalidation : Serving old content when updates are made.
3. Stale while Revalidate : Server stale content while fetching new content.


## Ways to add Data to CDNs

1. Pull Based
    - CDN fetches the data from the server, when user requests it. It only gets expired when the TTL exceed. 
        * Slower at first fetch.
        * High chances of getting stale data.
2. Push Based
    - CDN received the new-content every time data is gets changes into the server. It's server responsibilty to update the data into the CDN/