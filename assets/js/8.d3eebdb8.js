(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(t,s,a){"use strict";a.r(s);var e=a(42),i=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"线性变换和矩阵"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性变换和矩阵"}},[t._v("#")]),t._v(" 线性变换和矩阵")]),t._v(" "),a("p",[t._v("如果要在整个线性代数里选一个极为重要但又容易被初学者忽视的主题，\n那么它就是现在要讲的这个："),a("strong",[t._v("线性变换，以及它与矩阵的关系")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"几何上理解线性变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#几何上理解线性变换"}},[t._v("#")]),t._v(" 几何上理解线性变换")]),t._v(" "),a("h3",{attrs:{id:"变换的含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变换的含义"}},[t._v("#")]),t._v(" 变换的含义")]),t._v(" "),a("p",[t._v("首先我们看线性变换的字面的含义，其中”变换“是什么意思？")]),t._v(" "),a("p",[t._v("我们知道函数描述了一种输入与输出的关系，\n那么线性变换里的变换也是一样，只不过这里的输入输出是向量的形式。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_trans.png",alt:"linearTrans_trans"}})]),t._v(" "),a("p",[t._v("那么我们为什么又要发明”变换“这种定义而不是直接就用函数呢？\n其实我们更多的是可以把这种变换看成一种”运动“，也就是一个向量”运动“到了另一个向量那里。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_reason_single.png",alt:"linearTrans_reason_single"}})]),t._v(" "),a("p",[t._v("我们同样的也可以把变换从单一的向量扩展到很多个向量，甚至是整个平面的向量。在上一节我们讲过，\n我们用"),a("RouterLink",{attrs:{to:"/document/linearComSpanBasis.html#将向量看成一个点"}},[t._v("点来表示向量")]),t._v("更为清晰和方便。")],1),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_reason_mul.png",alt:"linearTrans_reason_mul"}})]),t._v(" "),a("p",[t._v("同时，如果我们在坐标系下加一个网格，对网格上的点做变换，可以看的更清晰（同时我们也保留了原有的网格做了对比）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_reason_grid.png",alt:"linearTrans_reason_grid"}})]),t._v(" "),a("p",[t._v("当然，其实这种变换可能不总是这么规整，经过变换，可能最终的结果是多种多样的。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_reason_complex.png",alt:"linearTrans_reason_complex"}})]),t._v(" "),a("p",[t._v("可以想象，这种变换可能会变得非常复杂，但是幸运的是，我们要考虑的变换做出了一定程度限制，\n这也是我们为什么要引入线性这个概念。")]),t._v(" "),a("h3",{attrs:{id:"线性的含义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#线性的含义"}},[t._v("#")]),t._v(" 线性的含义")]),t._v(" "),a("p",[t._v("当我们理解了变换的含义，那么其中”线性“又是什么意思？")]),t._v(" "),a("p",[t._v("一种变换要满足线性，必须要满足两个条件：")]),t._v(" "),a("ul",[a("li",[t._v("直线变换后仍是直线")]),t._v(" "),a("li",[t._v("原点要保持在原点")])]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_linear.png",alt:"linearTrans_linear"}})]),t._v(" "),a("p",[t._v("那么我们在讨论变换的含义这一小节中给出的最后的一种变换就不是线性变换了，因为显然，变换后网格扭曲了。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("补充")]),t._v(" "),a("p",[t._v("需要注意的是，直线变换后仍为直线这条规则适用于变换前图像上的所有直线，而不只限于网格线。\n或者也可以说，你需要保证网格线"),a("strong",[t._v("平行且等距分布")])])]),t._v(" "),a("h2",{attrs:{id:"代数上理解线性变换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代数上理解线性变换"}},[t._v("#")]),t._v(" 代数上理解线性变换")]),t._v(" "),a("p",[t._v("我们刚刚看到了几何上的这种线性变换，那么这种变换的过程在代数，或者说是向量的坐标上，是如何表现的呢？")]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_alg.png",alt:"linearTrans_alg"}})]),t._v(" "),a("p",[t._v("答案就是，实际上我们只需要关注 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mover",{attrs:{accent:"true"}},[a("mrow",[a("mi",[t._v("i")])],1),a("mo",[t._v("⃗")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\vec{i}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.94296em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.94296em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord accent"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticStyle:{top:"-0.22852em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"accent-body accent-vec"},[a("span",[t._v("⃗")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(", "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mover",{attrs:{accent:"true"}},[a("mrow",[a("mi",[t._v("j")])],1),a("mo",[t._v("⃗")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\vec{j}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.94296em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.1374em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord accent"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])]),a("span",{staticStyle:{top:"-0.2285200000000001em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"accent-body accent-vec"},[a("span",[t._v("⃗")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" 这两个我们所定义的基向量就可以了，\n因为基于线性变换后网格线等距分布这一性质，"),a("strong",[t._v("变换后的向量满足跟变换前相同的线性组合")]),t._v("。")]),t._v(" "),a("p",[t._v("也就是说我们只需要知道变换后 "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mover",{attrs:{accent:"true"}},[a("mrow",[a("mi",[t._v("i")])],1),a("mo",[t._v("⃗")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\vec{i}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.94296em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.94296em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord accent"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticStyle:{top:"-0.22852em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"accent-body accent-vec"},[a("span",[t._v("⃗")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(", "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mover",{attrs:{accent:"true"}},[a("mrow",[a("mi",[t._v("j")])],1),a("mo",[t._v("⃗")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\vec{j}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.94296em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.1374em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord accent"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])]),a("span",{staticStyle:{top:"-0.2285200000000001em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"accent-body accent-vec"},[a("span",[t._v("⃗")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(" 的坐标，我们就能知道任意一个向量变换后的坐标。\n这样看的话，其实也就是说变换后的基向量  "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mover",{attrs:{accent:"true"}},[a("mrow",[a("mi",[t._v("i")])],1),a("mo",[t._v("⃗")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\vec{i}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.94296em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"0.94296em","vertical-align":"0em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord accent"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit"},[t._v("i")])])]),a("span",{staticStyle:{top:"-0.22852em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"accent-body accent-vec"},[a("span",[t._v("⃗")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(", "),a("span",{staticClass:"katex"},[a("span",{staticClass:"katex-mathml"},[a("math",[a("semantics",[a("mrow",[a("mover",{attrs:{accent:"true"}},[a("mrow",[a("mi",[t._v("j")])],1),a("mo",[t._v("⃗")])],1)],1),a("annotation",{attrs:{encoding:"application/x-tex"}},[t._v("\\vec{j}")])],1)],1)],1),a("span",{staticClass:"katex-html",attrs:{"aria-hidden":"true"}},[a("span",{staticClass:"strut",staticStyle:{height:"0.94296em"}}),a("span",{staticClass:"strut bottom",staticStyle:{height:"1.1374em","vertical-align":"-0.19444em"}}),a("span",{staticClass:"base textstyle uncramped"},[a("span",{staticClass:"mord accent"},[a("span",{staticClass:"vlist"},[a("span",{staticStyle:{top:"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"mord textstyle cramped"},[a("span",{staticClass:"mord mathit",staticStyle:{"margin-right":"0.05724em"}},[t._v("j")])])]),a("span",{staticStyle:{top:"-0.2285200000000001em","margin-left":"0em"}},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),a("span",{staticClass:"accent-body accent-vec"},[a("span",[t._v("⃗")])])]),a("span",{staticClass:"baseline-fix"},[a("span",{staticClass:"fontsize-ensurer reset-size5 size5"},[a("span",{staticStyle:{"font-size":"0em"}},[t._v("​")])]),t._v("​")])])])])])]),t._v(", 描述了这个线性变换。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_core.png",alt:"linearTrans_core"}})]),t._v(" "),a("p",[t._v("写出来是这种形式，可以看出，原来的向量对基向量保持了相同的线性组合。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_xy.png",alt:"linearTrans_xy"}})]),t._v(" "),a("p",[t._v("因此实际上我们就可以把这两个变换后的基向量写成矩阵的形式，这也显示了矩阵的核心：")]),t._v(" "),a("blockquote",[a("ul",[a("li",[a("strong",[t._v("矩阵包含了一个线性变换的所有信息")]),t._v("。")])])]),t._v(" "),a("p",[t._v("比如当我们想知道一个向量经过线性变换后的坐标，\n我们只需要在前面乘上这一个矩阵就可以了（实际上这也定义了矩阵的乘法）。")]),t._v(" "),a("p",[a("img",{attrs:{src:"/linearAlgebra/linearTransMatrix/linearTrans_matrix.png",alt:"linearTrans_matrix"}})])])}),[],!1,null,null,null);s.default=i.exports}}]);