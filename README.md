# 属性型指令(ATTRIBUTE DIRECTIVES)

>自己的一些demo
>官网新版本的属性型指令的例子...
<p>
  @Input( 别名 )

使用这个指令的开发人员会期望绑定到属性名 myHighlight 上， 而指令中的属性名是 highlightColor 。两者联系不起来。

我们可以通过把属性名改为 myHighlight 来解决这个矛盾，就像这样：


@Input() myHighlight: string;
但我们可能在指令中不想要那样一个属性名，因为它不能很好的表示我们的意图。 可以通过把 myHighlight 传给 @Input 装饰器来把这个属性名作为 highlightColor 属性的别名。


@Input('myHighlight') highlightColor: string;

 Input 属性

之前 , 我们曾把 highlightColor 定义为 HighlightDirective 指令的一个 input 属性。

以前也见过属性绑定，但我们从没有定义过它们。为什么现在就不行了？

Angular 在绑定的 源 和 目标 之间有一个巧妙但重要的区别。

在以前的所有绑定中，指令或组件的属性都是绑定 源 。 如果属性出现在了模板表达式等号 (=) 的 右侧 ，它就是一个 源 。

如果它出现在了 方括号 ([ ]) 中，并且出现在等号 (=) 的 左侧 ，它就是一个 目标 …… 就像在绑定到 HighlightDirective 的 myHighlight 属性时所做的那样。


<p [myHighlight]="color">Highlight me!</p>
[myHighlight]="color" 中的 'color' 就是绑定 源 。 源属性不需要特别声明。

[myHighlight]="color" 中的 'myHighlight' 就是绑定 目标 。 必须把它定义为一个 Input 属性，否则， Angular 就会拒绝这次绑定，并给出一个明确的错误。

Angular 这样区别对待 目标 属性有充分的理由。 作为目标的组件或指令需要保护。

假想一下， HighlightDirective 真是一个好东西。 我们优雅的把它当作礼物送给全世界。

出乎意料的是，有些人 ( 可能因为太天真 ) 开始绑定到这个指令中的 每一个 属性。 不仅仅只是我们预期为绑定目标的那一两个属性，而是 每一个 。 这可能会扰乱指令的工作方式——我们既不想这样做也不想支持他们这样做。

于是，这种 输入 声明可以确保指令的消费者只能绑定到公开 API 中的属性，其它的都不行。


</code>
</p>