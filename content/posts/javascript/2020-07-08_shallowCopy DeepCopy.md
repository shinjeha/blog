---
title: "javascript 얕은복사와 깊은복사"
description: "javascript 얕은복사와 깊은복사"
date: 2020-07-08
---

## =을 이용한 복사

javascript에서는 기본 자료형(primitive type)을 복사할 때 값을 완전히 복사한다.

-> 자료형의 값 복사는 깊은 복사

반면 객체는 객체의 메모리 주소만 복사한다. (참조 복사)

-> 객체의 값 복사는 얕은 복사

## 얕은복사 (shallow copy)

 = 참조 복사, call by reference

## 깊은복사 (deep copy)

 = 값 복사, call by value

※ *angularjs에서는 angular.copy를 하면 Deep copy가 된다.*
