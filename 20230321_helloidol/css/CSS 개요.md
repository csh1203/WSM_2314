# style 적용 세가지 방법
1. <... style="..."> in HTML
1. ```<style> ... </style>``` in HTML ```<head>```
1. __.css 파일 만들어서 link__

# 형식
```css 
selector {
    attribute: value; /*comment*/
}
```

## selector
<pre>
/*시험 (중요!!!!!)*/
#id : id는 한 번만 사용 가능 : 주어진 값을 class 속성값으로 가진 html요소를 찾아 
.class : class는 여러 번 사용 가능(분류할 때 사용)
a (TAG)


선택자 : 선택을 통해 특정 요소들을 선택하여 스타일을 적용하는 것
selector1 selector2 : selector1요소의 자손인 selector2를 선택한다
selector1 > selector2 : selector1요소의 자식은 selector2요소를 선택한다
selector1, selector2 : 선택자 그룹을 생성하는 방법으로 모든 일치하는 노드를 선택
selector1 + selector2 : selector1요소를 뒤따르는 selector2요소를 선택한다.(selecotr1 바로 옆에 selector2가 있으면 !!*selector2*!!를 선택함) / selector`의 첫째 자매 selector2 하나 선택
selector1 ~ selector2  : selector1요소가 앞에 존재하면          selector2요소를 선택한다. / selector1의 자매 중 모든 selector2 선택
selector:first-child() : 첫 번째 등장하는 요소가 E라면 선택한다
selector:nth-child(n)  : 형제 요소 중에서 특정 순서(n)에 있는 요소를 선택할 때 사용
selector:hover : 요소에 포커스가 머물러 있는 동안 selector를 선택한다.


[속성="값"]             <... 속성="값">인 모든 요소 선택
</pre>

# 우선순위
1. !important
2. #id
3. .class
4. TAG
5. \*
- 구체 > 포괄
- 같은 우선순위일 때, 나중에 쓴게 적용



