---
title: "AccessDeniedException"
description: "Elasticsearch java.nio.file.AccessDeniedException에러 처리"
date: 2020-07-02
---

Elasticsearch 구동 시 에러가 발생했다.

```console
Exception in thread "main" java.nio.file.AccessDeniedException: /tmp/elasticsearch-~~~
    at ...
    at ...
    at ...
```

말 그대로 권한 문제.

크게 두가지 경우로 나뉘는거 같다.

## 1. 파일 권한 문제

```console
Exception in thread "main" java.nio.file.AccessDeniedException: /home/elasticsearch/config/jvm.options
    at ...
    at ...
    at ...
```

구체적인 파일명이 적혀 있으면 해당 파일의 권한이 Elasticsearch권한으로 되어있는지 살펴봐야 한다.

*root권한으로는 사용이 불가능하다 한다.*

## 2. 폴더 쓰기 권한 문제

내 경우엔 폴더 권한 문제였다.

```console
Exception in thread "main" java.nio.file.AccessDeniedException: /tmp/elasticsearch-~~~
    at ...
    at java.nio.file.Files.createDirectory(Files.java:674)
    at java.nio.file.TempFileHelper.create(TempFileHelper.java:136)
    at java.nio.file.TempFileHelper.createTempDirectory(TempFileHelper.java:173)
    at java.nio.file.Files.createTempDirectory(Files.java:991)
    at ...
```

위와 같이 로그 중간에 파일을 생성하다가 생긴 에러라서 구글링 해보니 해당 폴더에서 쓰기 권한이 없어서 발생한 에러였던것.
