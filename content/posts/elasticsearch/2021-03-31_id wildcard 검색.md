---
title: "_id wildcard 검색"
date: 2021-03-31
category: 'elasticsearch'
---

# _id wildcard로 검색

그냥 wildcard 쿼리로 검색하면 에러가 발생하므로 script를 이용한다.

```json
{
  "query": {
    "script": {
      "script": "doc['_id'][0].indexOf('test_') > -1"
	}
  }
}
```

