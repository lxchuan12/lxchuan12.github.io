(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{392:function(s,t,a){s.exports=a.p+"assets/img/wechat-official-accounts-mini.d9491f62.png"},420:function(s,t,a){s.exports=a.p+"assets/img/terminal.f21f4c90.png"},493:function(s,t,a){s.exports=a.p+"assets/img/windows-feature.dd9b453c.png"},494:function(s,t,a){s.exports=a.p+"assets/img/wsl.1e046c7e.png"},495:function(s,t,a){s.exports=a.p+"assets/img/ubuntu-20.04.995fdfbe.png"},496:function(s,t,a){s.exports=a.p+"assets/img/windows-Terminal.ba6ca957.png"},497:function(s,t,a){s.exports=a.p+"assets/img/remote-wsl.1ae8bf85.png"},595:function(s,t,a){"use strict";a.r(t);var e=a(31),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"使用-ohmyzsh-打造-windows、ubuntu、mac-系统高效终端命令行工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用-ohmyzsh-打造-windows、ubuntu、mac-系统高效终端命令行工具"}},[s._v("#")]),s._v(" 使用 ohmyzsh 打造 windows、ubuntu、mac 系统高效终端命令行工具")]),s._v(" "),e("blockquote",[e("p",[s._v("原标题名：\noh my zsh 和 windows git bash 设置别名提高效率")])]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("写于2018年06月03日")])])]),s._v(" "),e("blockquote",[e("p",[s._v("你好，我是"),e("a",{attrs:{href:"https://lxchuan12.gitee.io",target:"_blank",rel:"noopener noreferrer"}},[s._v("若川"),e("OutboundLink")],1),s._v("，微信搜索"),e("a",{attrs:{href:"https://mp.weixin.qq.com/s/c3hFML3XN9KCUetDOZd-DQ",target:"_blank",rel:"noopener noreferrer"}},[s._v("「若川视野」"),e("OutboundLink")],1),s._v("关注我，专注前端技术分享。欢迎加我微信"),e("code",[s._v("ruochuan12")]),s._v("，加群交流学习。")])]),s._v(" "),e("blockquote",[e("p",[s._v("在我的微信交流群中听闻很多前端开发比较贫穷，没有买mac电脑（比如我），也没有用过"),e("code",[s._v("ohmyzsh")]),s._v("。于是就有了这篇写于"),e("code",[s._v("2018年")]),s._v("文章的更新。这篇文章没啥难度，很快就能看完，主要还是希望读者你看完后可以安装开始使用高效终端工具。有了这么强大的终端工具后我发现"),e("code",[s._v("Windows")]),s._v("很好用呀，瞬间感觉都不需要买"),e("code",[s._v("mac")]),s._v("了。")])]),s._v(" "),e("p",[s._v("主要就是：")]),s._v(" "),e("ul",[e("li",[s._v("利用"),e("code",[s._v("Windows")]),s._v("的"),e("code",[s._v("linux")]),s._v("子系统功能")]),s._v(" "),e("li",[s._v("安装"),e("code",[s._v("Ubuntu")]),s._v("系统，安装"),e("code",[s._v("ohmyzsh")]),s._v("和一些插件")]),s._v(" "),e("li",[s._v("安装"),e("code",[s._v("windows Terminal")]),s._v("工具")]),s._v(" "),e("li",[s._v("安装"),e("code",[s._v("vscode remote-wsl")]),s._v("插件")]),s._v(" "),e("li",[s._v("安装 tig 查看 git 记录")])]),s._v(" "),e("p",[s._v("先看下效果。反正我是用了"),e("code",[s._v("ohmyzsh")]),s._v("后，离不开了。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(420),alt:"最终终端效果"}})]),s._v(" "),e("h2",{attrs:{id:"windows-安装-ubuntu-子系统-安装-windows-terminal"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-安装-ubuntu-子系统-安装-windows-terminal"}},[s._v("#")]),s._v(" windows 安装 Ubuntu 子系统 安装 windows Terminal")]),s._v(" "),e("p",[s._v("搜索"),e("strong",[s._v("启用或关闭 windows 功能")]),s._v("，勾选"),e("strong",[s._v("适用于 "),e("code",[s._v("Linux")]),s._v(" 的 "),e("code",[s._v("Windows")]),s._v(" 子系统")]),s._v("，确定后重启电脑。")]),s._v(" "),e("p",[s._v("搜索 "),e("code",[s._v("Ubuntu")]),s._v(" 和 "),e("code",[s._v("windows Terminal")]),s._v(" 并安装（"),e("code",[s._v("windows Terminal")]),s._v(" 可能要求win10系统比较高的版本，一般更新到最新版本即可）")]),s._v(" "),e("p",[e("code",[s._v("Ubuntu")]),s._v("安装好后会要求设置用户名和密码。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(493),alt:"搜索 启用或关闭 windows 功能"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(494),alt:"勾选 适用于 Linux 的 Windows 子系统"}})]),s._v(" "),e("p",[e("img",{attrs:{src:a(495),alt:"搜索 Ubuntu "}}),s._v("\n建议安装最新版 "),e("code",[s._v("Ubuntu 20.04")])]),s._v(" "),e("p",[e("img",{attrs:{src:a(496),alt:"Windows Terminal"}})]),s._v(" "),e("p",[e("code",[s._v("win10")]),s._v("安装了"),e("code",[s._v("ubuntu")]),s._v("子系统和"),e("code",[s._v("oh my zsh")]),s._v("后，则可以通过"),e("code",[s._v("/mnt/f/")]),s._v("访问"),e("code",[s._v("win10")]),s._v("下的"),e("code",[s._v("f")]),s._v("盘，或者其他盘。\n也就有上面的"),e("code",[s._v("pwd")]),s._v("效果图。")]),s._v(" "),e("h2",{attrs:{id:"安装-vscode-remote-wsl-插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-vscode-remote-wsl-插件"}},[s._v("#")]),s._v(" 安装 vscode remote-wsl 插件")]),s._v(" "),e("p",[s._v("下载安装"),e("a",{attrs:{href:"https://code.visualstudio.com/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("vscode")]),e("OutboundLink")],1),s._v("，并且安装"),e("code",[s._v("remote-wsl")]),s._v("插件。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(497),alt:"vscode remote-wsl 插件"}})]),s._v(" "),e("h2",{attrs:{id:"安装-oh-my-zsh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装-oh-my-zsh"}},[s._v("#")]),s._v(" 安装 "),e("code",[s._v("oh my zsh")])]),s._v(" "),e("p",[s._v("简述下"),e("code",[s._v("oh my zsh")]),e("a",{attrs:{href:"http://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh my zsh官网"),e("OutboundLink")],1),s._v("的安装方法。\n"),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("github ohmyzsh"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("安装"),e("code",[s._v("oh my zsh")]),s._v("部分适用于"),e("code",[s._v("Ubuntu")]),s._v("和"),e("code",[s._v("mac")]),s._v("系统。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$SHELL")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# /bin/bash 默认是bash")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看下有哪些shells")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/shells\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 zsh")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" -y\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看zsh版本")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" --version\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 5.1.1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装后zsh 后cat /etc/shells 才有/bin/zsh /usr/bin/zsh")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换成zsh")]),s._v("\nchsh -s "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者这条命令")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# chsh -s /usr/bin/zsh")]),s._v("\n")])])]),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 三种安装方案可供选择：")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Via curl")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Via Wget")]),s._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果上面两种情况还安装不了，可以使用如下方式。")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# via git clone")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/ohmyzsh/ohmyzsh.git ~/.oh-my-zsh\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc\nchsh -s "),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开新的终端会应用新的zshrc配置")]),s._v("\n")])])]),e("p",[s._v("如果以上三种方式还装不了，可以来找我(若川 微信"),e("code",[s._v("ruochuan12")]),s._v(")。也可以查看"),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh my zsh文档"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("安装成功后，配置信息会在"),e("code",[s._v("~/.zshrc")]),s._v("。可以通过"),e("code",[s._v("code ~/.zshrc")]),s._v("(如果没安装vscode，可以用"),e("code",[s._v("vim ~/.zshrc")]),s._v(")打开编辑"),e("code",[s._v("zsh")]),s._v("配置信息，可以看到默认配置了"),e("code",[s._v("git")]),s._v(" 插件"),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Plugin:git"),e("OutboundLink")],1),s._v("。\n也就是说，可以更加简便的使用"),e("code",[s._v("git")]),s._v(" 相关的一些别名。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比如")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("时，只需要输入"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("gst"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("。\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" 时，只需要输入"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("gl"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("。\n"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(" 时，只需要输入"),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("gp"),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("等等。\n")])])]),e("p",[s._v("是因为配置里有这些简写，还有更多可以查看这里"),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git/",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh my zsh plugin git.plugin.zsh文档配置"),e("OutboundLink")],1),s._v("，"),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("github oh my zsh plugin git.plugin.zsh文件地址"),e("OutboundLink")],1),s._v("。\n安装成功后，同时会创建"),e("code",[s._v("~/.oh-my-zsh")]),s._v("的文件夹，其实就是"),e("code",[s._v(".oh-my-zsh")]),s._v(" 的 "),e("code",[s._v("git")]),s._v(" 仓库"),e("code",[s._v("master")]),s._v("分支。\n可以发现文件夹中有一个"),e("code",[s._v("plugins")]),s._v("文件夹，内置了很多插件。可以自定义主题"),e("code",[s._v("theme")]),s._v("，具体可以看"),e("a",{attrs:{href:"https://github.com/robbyrussell/oh-my-zsh/blob/master/themes/example.zsh-theme",target:"_blank",rel:"noopener noreferrer"}},[s._v("example.zsh-theme"),e("OutboundLink")],1),s._v("。\n"),e("code",[s._v("custom")]),s._v("自定义相关。\n插件相关会安装在这里，"),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/blob/master/custom/plugins/example/example.plugin.zsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("更多可以查看example.plugin.zsh"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("我暂时安装了这几个插件。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内置插件，启用即可")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按两下esc键，用sudo权限")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 记录历史输入的zsh命令，自动提示，快速使用")]),s._v("\n  zsh-autosuggestions\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# zsh 命令高亮")]),s._v("\n  zsh-syntax-highlighting\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),e("p",[s._v("顺带讲下后面两个插件的安装方法\n安装 "),e("code",[s._v("zsh-autosuggestions")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git://github.com/zsh-users/zsh-autosuggestions "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v("/plugins/zsh-autosuggestions\n")])])]),e("p",[s._v("安装"),e("code",[s._v("zsh-syntax-highlighting")])]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone https://github.com/zsh-users/zsh-syntax-highlighting.git "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$ZSH_CUSTOM")]),s._v("/plugins/zsh-syntax-highlighting\n")])])]),e("p",[e("code",[s._v("$ZSH_CUSTOM")]),s._v(" 其实是个变量，代表这个路径"),e("code",[s._v("~/.oh-my-zsh/custom")]),s._v("，\n也就是安装到了这个目录下。还有很多高效插件，等您发掘~"),e("a",{attrs:{href:"http://ohmyz.sh/",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh my zsh官网"),e("OutboundLink")],1),s._v("\n不过插件安装多了，感觉会有些卡顿~")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 每次修改了这个`.zshrc`配置文件，需要重载一下，才能生效。")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" .zshrc\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 也可以封装成一个简写命令 alias")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'source ~/.zshrc'")]),s._v("\n")])])]),e("p",[s._v("也可以在这个配置文件中配置更多"),e("code",[s._v("alias")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ~/.zshrc")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 比如跳转到工作目录")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dgg")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd /mnt/f/git-source/github'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vscode 打开要编辑的文件或文件夹")]),s._v("\ncode blog\n")])])]),e("p",[s._v("这也就是开头的效果图了。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(420),alt:"最终终端效果"}})]),s._v(" "),e("p",[s._v("那不是"),e("code",[s._v("win10")]),s._v("，也想通过设置别名来提高效率，是不是就没有办法了呢，可以使用"),e("code",[s._v("git bash")]),s._v("设置"),e("code",[s._v("alias")]),s._v("，安装"),e("code",[s._v("git")]),s._v("，自带"),e("code",[s._v("git bash")]),s._v("。")]),s._v(" "),e("h2",{attrs:{id:"windows-git-bash-设置别名提高效率"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#windows-git-bash-设置别名提高效率"}},[s._v("#")]),s._v(" "),e("code",[s._v("windows")]),s._v(" "),e("code",[s._v("git bash")]),s._v(" 设置别名提高效率")]),s._v(" "),e("p",[e("code",[s._v("windows")]),s._v(" 桌面或任意资源管理器位置，右击，选择"),e("code",[s._v("Git Bash Here")]),s._v("，即打开了"),e("code",[s._v("git bash")]),s._v("命令行。\n先设置下主题，右击选择"),e("code",[s._v("options")]),s._v(", "),e("code",[s._v("Looks > theme > dracula")]),s._v("\n我选择的是"),e("code",[s._v("dracula")]),s._v("主题，看起来比较舒适。还可以设置字体等。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 跳转到根路径")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看下是否有.bash_profile文件")]),s._v("\nla\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如果没有.bash_profile文件，需要创建")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" .bash_profile\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 打开编辑 （我这里安装了vscode，所以直接用其打开文件）")]),s._v("\ncode .bash_profile\n")])])]),e("p",[s._v("可以根据修改设置一些别名。\n比如我们常用的"),e("code",[s._v("git status")]),s._v("命令，可以封装成"),e("code",[s._v("gst")]),s._v("。清屏"),e("code",[s._v("clear")]),s._v("命令封装成"),e("code",[s._v("cls")]),s._v("。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gst")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git status'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cls")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'clear'")]),s._v("\n")])])]),e("p",[s._v("每次修改这个文件需要输入"),e("code",[s._v("source ~/.bash_profile")]),s._v("重载这个文件，才会生效。\n"),e("code",[s._v("code ~/.bash_profile")]),s._v("，用"),e("code",[s._v("vscode")]),s._v("编辑这个配置文件，封装成一个命令。\n比如：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'source ~/.bash_profile'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bashconfig")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'code ~/.bash_profile'")]),s._v("\n")])])]),e("p",[s._v("这样每次修改保存后就只需要输入"),e("code",[s._v("rl")]),s._v("，即可重载生效了。\n还可以把一些工作目录封装，我的一些项目是放在"),e("code",[s._v("/f/git-source/github")]),s._v("文件下。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# github上的项目")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dgg")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd F:/git-source/github'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 周报相关")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dcwk")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd F:/git-source/coding/weekly'")]),s._v("\n")])])]),e("p",[s._v("每次进入项目，就直接"),e("code",[s._v("dgg")]),s._v("，即可跳转到这个目录，然后选择相应的目录即可。\n比如"),e("code",[s._v("dgg")]),s._v("进入工作目录，"),e("code",[s._v("cd analyse-vue-cli")]),s._v("进入项目目录,（输入"),e("code",[s._v("anal")]),s._v("按"),e("code",[s._v("tab")]),s._v("键智能提示）")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  /f/git-source/github/analyse-vue-cli (dev)")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看状态 git status")]),s._v("\ngst\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用vscode 打开这个文件夹，开始编辑~")]),s._v("\ncode ./\n")])])]),e("p",[s._v("git 相关的，\n例举一些平时用的比较多的。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("g")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ga")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git add'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gaa")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git add -all'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gp")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gl")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git pull'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gcmsg")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git commit -m'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分支相关")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gb")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gbr")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch -r'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gba")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git branch -a'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# checkout")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gco")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git checkout'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gcb")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git checkout -b'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# merge")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gm")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git merge'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# diff")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gd")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git diff'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gdw")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git diff --word-diff'")]),s._v("\n")])])]),e("p",[s._v("更多可以把"),e("code",[s._v("oh my zsh")]),s._v("的插件一些命令拷贝过来，留"),e("code",[s._v("alias")]),s._v("相关的即可，"),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/git/git.plugin.zsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("oh my zsh plugin git.plugin.zsh"),e("OutboundLink")],1),s._v(" "),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/tree/master/plugins/git/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Plugin:git wiki"),e("OutboundLink")],1),s._v("\n相当于解锁了"),e("code",[s._v("oh my zsh")]),s._v(" 的"),e("code",[s._v("git")]),s._v("插件。还有很多插件，比如"),e("code",[s._v("npm")]),e("a",{attrs:{href:"https://github.com/ohmyzsh/ohmyzsh/blob/master/plugins/npm/npm.plugin.zsh",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看"),e("OutboundLink")],1),s._v(", "),e("code",[s._v("node 等")]),s._v("，都可以研究下。")]),s._v(" "),e("p",[e("code",[s._v("git bash")]),s._v("，有没有类似"),e("code",[s._v("oh my zsh")]),s._v("的插件呢，我暂时没发现，如果您知道，欢迎告诉我。\n目录相关的操作，也可以设置一些别名。比如：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 回退到上一级")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd ..'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd ../..'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd ../../..'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("."),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd ../../../..'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cd ../../../../..'")]),s._v("\n")])])]),e("p",[s._v("更多别名可以自定义～\n"),e("code",[s._v("windows")]),s._v("上命令行工具还可以使用"),e("code",[s._v("cmder")]),e("a",{attrs:{href:"http://cmder.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("点击查看cmder官网"),e("OutboundLink")],1),s._v("命令行工具。虽然我几年前就安装了，但发现还是"),e("code",[s._v("git bash")]),s._v("用的顺畅些，可能是我还不太习惯"),e("code",[s._v("cmder")]),s._v("。\n关于"),e("code",[s._v("cmder")]),s._v("配置相关，这里推荐晚晴幽草轩轩主的一篇文章：\n"),e("a",{attrs:{href:"https://jeffjade.com/2016/01/13/2016-01-13-windows-software-cmder/",target:"_blank",rel:"noopener noreferrer"}},[s._v("《Win下必备神器之Cmder》"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("也有"),e("a",{attrs:{href:"http://www.cygwin.com/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cygwin"),e("OutboundLink")],1),s._v("，也是"),e("code",[s._v("windows")]),s._v("命令行工具，也可以安装"),e("code",[s._v("on my zsh")]),s._v("。")]),s._v(" "),e("p",[s._v("当然，"),e("code",[s._v("git")]),s._v("也是可以设置别名的。")]),s._v(" "),e("h2",{attrs:{id:"git设置别名-使用tig神器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git设置别名-使用tig神器"}},[s._v("#")]),s._v(" "),e("code",[s._v("git")]),s._v("设置别名，使用"),e("code",[s._v("tig")]),s._v("神器")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# git status => git st")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global alias.st status\n")])])]),e("p",[s._v("更多可以查看廖雪峰老师的这篇文章"),e("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/0013739516305929606dd18361248578c67b8067c8c017b000/001375234012342f90be1fc4d81446c967bbdc19e7c03d3000",target:"_blank",rel:"noopener noreferrer"}},[s._v("git 配置别名"),e("OutboundLink")],1),s._v("。不过可能大多数人不知道，他们可能用着可视化工具。我觉得可视化工具也是对"),e("code",[s._v("git")]),s._v("的一些封装，具体背后是什么命令，我们还是需要去了解熟悉的。命令行使用"),e("code",[s._v("git")]),s._v("，我推荐使用"),e("code",[s._v("tig")]),s._v("。"),e("code",[s._v("git log")]),s._v("增强版，性能很好。"),e("code",[s._v("Ubuntu")]),s._v("、"),e("code",[s._v("linux")]),s._v("、"),e("code",[s._v("mac")]),s._v("可以直接安装，"),e("code",[s._v("windows")]),s._v("稍微麻烦些。具体安装方法查看"),e("a",{attrs:{href:"https://github.com/jonas/tig/blob/master/INSTALL.adoc",target:"_blank",rel:"noopener noreferrer"}},[s._v("tig github仓库中的官方安装文档"),e("OutboundLink")],1),s._v("，或者查看这篇文章："),e("a",{attrs:{href:"https://www.jianshu.com/p/e4ca3030a9d5",target:"_blank",rel:"noopener noreferrer"}},[s._v("颠覆 Git 命令使用体验的神器 -- tig"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"小结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),e("p",[s._v("磨刀不误砍柴工，花时间折腾研究工具，有利于提高开发效率。")]),s._v(" "),e("p",[s._v("最新更新于 "),e("code",[s._v("2020-06-21 23:32:08")])]),s._v(" "),e("p",[s._v("文章首发于"),e("code",[s._v("segmentfault")]),s._v(" "),e("a",{attrs:{href:"https://segmentfault.com/a/1190000015155864",target:"_blank",rel:"noopener noreferrer"}},[s._v("win10 安装 oh my zsh 和 windows git bash 设置别名提高效率"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"关于"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关于"}},[s._v("#")]),s._v(" 关于")]),s._v(" "),e("p",[s._v("作者：常以"),e("strong",[s._v("若川")]),s._v("为名混迹于江湖。前端路上 | PPT爱好者 | 所知甚少，唯善学。"),e("br"),s._v(" "),e("a",{attrs:{href:"https://lxchuan12.github.io/",target:"_blank",rel:"noopener noreferrer"}},[s._v("若川的博客"),e("OutboundLink")],1),e("br"),s._v(" "),e("a",{attrs:{href:"https://juejin.im/user/1415826704971918/posts",target:"_blank",rel:"noopener noreferrer"}},[s._v("掘金专栏"),e("OutboundLink")],1),s._v("，欢迎关注~"),e("br"),s._v(" "),e("a",{attrs:{href:"https://segmentfault.com/blog/lxchuan12",target:"_blank",rel:"noopener noreferrer"}},[e("code",[s._v("segmentfault")]),s._v("前端视野专栏"),e("OutboundLink")],1),s._v("，开通了"),e("strong",[s._v("前端视野")]),s._v("专栏，欢迎关注~"),e("br"),s._v(" "),e("a",{attrs:{href:"https://zhuanlan.zhihu.com/lxchuan12",target:"_blank",rel:"noopener noreferrer"}},[s._v("知乎前端视野专栏"),e("OutboundLink")],1),s._v("，开通了"),e("strong",[s._v("前端视野")]),s._v("专栏，欢迎关注~"),e("br"),s._v(" "),e("a",{attrs:{href:"https://github.com/lxchuan12/blog",target:"_blank",rel:"noopener noreferrer"}},[s._v("github blog"),e("OutboundLink")],1),s._v("，相关源码和资源都放在这里，求个"),e("code",[s._v("star")]),s._v("^_^~")]),s._v(" "),e("h2",{attrs:{id:"微信公众号-若川视野"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信公众号-若川视野"}},[s._v("#")]),s._v(" 微信公众号  若川视野")]),s._v(" "),e("p",[s._v("可能比较有趣的微信公众号，长按扫码关注。也可以加微信 "),e("code",[s._v("ruochuan12")]),s._v("，注明来源，拉您进【前端视野交流群】。")]),s._v(" "),e("p",[e("img",{attrs:{src:a(392),alt:"若川视野"}})])])}),[],!1,null,null,null);t.default=n.exports}}]);