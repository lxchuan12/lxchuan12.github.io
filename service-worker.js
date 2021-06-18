/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "20160907-How-do-I-set-foot-on-the-front-end-of-the-road/index.html",
    "revision": "58d115faa32b4612a29cf2be5c2c63d8"
  },
  {
    "url": "20170602-After-a-year-s-work-I-had-some-insights/index.html",
    "revision": "712deed1d9950cdbe035e1a33b00d06a"
  },
  {
    "url": "20180421-youzan-front-end-tech-open-day/index.html",
    "revision": "d54a9f3f59722efd90d2368ab08d48ec"
  },
  {
    "url": "20190612-after-3-year-work/index.html",
    "revision": "e32dc39803f9858c7a09a4fe320a9d3b"
  },
  {
    "url": "404.html",
    "revision": "b9fd48d21a768f76bfc48cfdabdbddb3"
  },
  {
    "url": "about/index.html",
    "revision": "4dfd94a96d91331ea72fc0d162aa7b98"
  },
  {
    "url": "annual-summary/2016/index.html",
    "revision": "70e8fe90d0f9cb0527999e26e813d087"
  },
  {
    "url": "annual-summary/2017/index.html",
    "revision": "d654699e0e6d5d38408f866c4796b96b"
  },
  {
    "url": "annual-summary/2018/index.html",
    "revision": "f8aaa3b0250bc9f0616fa19c422abed9"
  },
  {
    "url": "annual-summary/2019/index.html",
    "revision": "a4b4850ee99b5a8b7c786bf494c91fbb"
  },
  {
    "url": "annual-summary/2020/index.html",
    "revision": "24cf87c912ebbbfd45ea54099e93b004"
  },
  {
    "url": "assets/css/0.styles.0ad39d54.css",
    "revision": "f239f60470550542478a8ffbec8ebcf6"
  },
  {
    "url": "assets/img/1.265acfd1.jpeg",
    "revision": "396a2ff9d6f2248b35815d5594d15fe4"
  },
  {
    "url": "assets/img/2.1d1f4130.jpeg",
    "revision": "833587076caad1baf3b1ef05e6db0010"
  },
  {
    "url": "assets/img/2017-cover.41a099e8.png",
    "revision": "f1279203fb66286096688b0dce03da18"
  },
  {
    "url": "assets/img/2017plan.1129dcb2.jpg",
    "revision": "9f1c2ba835d6b83d95339b232d43497b"
  },
  {
    "url": "assets/img/2017xmind.3cdf6b24.png",
    "revision": "6ed2eb07407d55851b09142316ef1f54"
  },
  {
    "url": "assets/img/2018-cover.10e48426.png",
    "revision": "54e0ac2bacfa87d9ce6628276c51f1ab"
  },
  {
    "url": "assets/img/2018-juejin.1230ea8b.png",
    "revision": "182be1202715c6f90f6e34e44b83acbc"
  },
  {
    "url": "assets/img/2018-rescuetime.bf46275f.png",
    "revision": "043bb74e7a699fa6981ed7ad3cb8ccad"
  },
  {
    "url": "assets/img/2018-suzhou.fa731b98.jpg",
    "revision": "2c2ef22ee16f5f4d9aeb17b992762859"
  },
  {
    "url": "assets/img/2018-teambition.7a93ea89.png",
    "revision": "14c0f46d7ff4bc0962a7be1ec77be305"
  },
  {
    "url": "assets/img/2018-xmind.99eb55aa.png",
    "revision": "14680e586a61701ae1df397cc53f21e0"
  },
  {
    "url": "assets/img/3.bc32be53.jpeg",
    "revision": "8d22a92826608702fcf85e234aadd98a"
  },
  {
    "url": "assets/img/4.eb7207cf.jpeg",
    "revision": "bbf2e27bcc277136d515c5739b69f903"
  },
  {
    "url": "assets/img/5.039baca7.jpeg",
    "revision": "403956b56250c13feffbd70767dfdc58"
  },
  {
    "url": "assets/img/axios-all.41d4c89c.png",
    "revision": "f9f7fc339d4768b4036b5edf8c62ff3e"
  },
  {
    "url": "assets/img/axios-instance.e915a96a.png",
    "revision": "d999d1a84c0367a1334daeb95cdc13c9"
  },
  {
    "url": "assets/img/axios-promise-chain.e4fa2152.png",
    "revision": "60a347a4197ef433ae4fff9aa8380c9c"
  },
  {
    "url": "assets/img/books.e2d9b287.jpg",
    "revision": "5f6ccce2c2860060f44c946f1a404494"
  },
  {
    "url": "assets/img/BrowserClient-instance.e70bf588.png",
    "revision": "021e3251524ce4a5cce6942a1bce3fb6"
  },
  {
    "url": "assets/img/captureMessageCallStack.1714e9ff.png",
    "revision": "e64fe48b45c6c5276cb07ee0a3f20f61"
  },
  {
    "url": "assets/img/code-folding.d9330c61.png",
    "revision": "62adfcd95b3d9581ad35330772b6a3b6"
  },
  {
    "url": "assets/img/components_provide.6bb18cde.png",
    "revision": "f7110a1bae2d0744997012ca656d8fa1"
  },
  {
    "url": "assets/img/computer.a0cb9368.png",
    "revision": "d2cd2e9dcae42775a54002ca941836ce"
  },
  {
    "url": "assets/img/contents.e6cbde3a.png",
    "revision": "41718e8457990771a7cac2071a459fe5"
  },
  {
    "url": "assets/img/ctor-prototype-instance@lxchuan12.24657345.png",
    "revision": "4dd61eb8600257f765167ff718f42fa4"
  },
  {
    "url": "assets/img/debug-launch.d30ca44e.png",
    "revision": "9f08e6aecca947772513f2e6ce7f54a2"
  },
  {
    "url": "assets/img/debug.7f563e4f.png",
    "revision": "abb7ebbd7fc18845144f3014b2b985de"
  },
  {
    "url": "assets/img/debugger.348c763f.png",
    "revision": "31eff335c77743b068b19c52761eecae"
  },
  {
    "url": "assets/img/demo-chain-map-result-debugger.fe494628.png",
    "revision": "8ffb602cc96dc4dfebd1b9d2c8362713"
  },
  {
    "url": "assets/img/demo-chain-map-result.06c41dca.png",
    "revision": "9a1feaa3a98da0901ae809580918e947"
  },
  {
    "url": "assets/img/demo1.87e2d9cd.png",
    "revision": "e2a14d483556faef17dc93b1c758cb1b"
  },
  {
    "url": "assets/img/demo1.ba8eed87.png",
    "revision": "2222dec7b56303e842d5bd8f0a011e6b"
  },
  {
    "url": "assets/img/demo2.5a8a16e8.png",
    "revision": "bd3ffce486d4bc0d39590898e2decfb3"
  },
  {
    "url": "assets/img/dida.6e9e20d2.jpg",
    "revision": "13baaae81b317439cc8d138abc991971"
  },
  {
    "url": "assets/img/es6-extends@lxchuan12.dded51bd.png",
    "revision": "ae7176aa7e3586d028de5bc06da14006"
  },
  {
    "url": "assets/img/f.5d534988.png",
    "revision": "f51efecd13d28767be8256689b5c9357"
  },
  {
    "url": "assets/img/first-1.1dbcd54c.jpg",
    "revision": "7e8f8d4272215fb409d1f51236ba2368"
  },
  {
    "url": "assets/img/first-2.5d11b5db.jpg",
    "revision": "d242f3064ab8a92674e44d7319e85504"
  },
  {
    "url": "assets/img/full.913562eb.jpg",
    "revision": "c1c85375aafc4e6a4cd24aa1170ef7c3"
  },
  {
    "url": "assets/img/github.7000920b.png",
    "revision": "71d519a7f8605d612426f7c25dfcb02e"
  },
  {
    "url": "assets/img/github.ad6a5411.png",
    "revision": "74bb786358a7a88368ca58fae62677ac"
  },
  {
    "url": "assets/img/gitlab.29ee04f2.png",
    "revision": "40e3c8b60a6fdd66bb59423b909783e6"
  },
  {
    "url": "assets/img/gitlab.b449f8a9.png",
    "revision": "96382449495d0024f554ff93dc010432"
  },
  {
    "url": "assets/img/goal.13ba4bae.png",
    "revision": "a378f89deb4fe122c848164fbad1fd45"
  },
  {
    "url": "assets/img/Hub-instance-new.3077372d.png",
    "revision": "34d42e085794ae12d75f1d43dd844f31"
  },
  {
    "url": "assets/img/img1.0f957a06.jpg",
    "revision": "9d443927e00a414834fe77c85ce00c24"
  },
  {
    "url": "assets/img/img2.ebf6d730.jpg",
    "revision": "1b60e4ab1762a5d38c7011454eb65ac9"
  },
  {
    "url": "assets/img/img3.fd15270b.jpg",
    "revision": "eba708778144f384d176982c927eaeae"
  },
  {
    "url": "assets/img/img4.96ab4cff.jpg",
    "revision": "a81e371fc41145d64a93574b0bd1e6c5"
  },
  {
    "url": "assets/img/img5.8dc4be1e.jpg",
    "revision": "2ae6c4d32546c947192d987a8adcdd61"
  },
  {
    "url": "assets/img/jQuery-v3.4.1-prototype.cebfa228.png",
    "revision": "3ea327e4496df63318e056035c264754"
  },
  {
    "url": "assets/img/juejin.a7995ad8.svg",
    "revision": "a7995ad8a14a816fe32960457099ae29"
  },
  {
    "url": "assets/img/koa-instance-debug.b7afd112.jpeg",
    "revision": "986fe09283eab7790623be32527cfd4b"
  },
  {
    "url": "assets/img/koa-instance-xmind.c8ca2f00.png",
    "revision": "f3693a34b6c960d520dfcc5dc98d33c9"
  },
  {
    "url": "assets/img/koa-instance.11cf9b55.jpeg",
    "revision": "de24175cec0af77b2b21079daca7d1e2"
  },
  {
    "url": "assets/img/lagou-provides.a779986b.png",
    "revision": "0713294cbeea2c6f235775ba3b43ccce"
  },
  {
    "url": "assets/img/level.bdedf561.png",
    "revision": "3b3d1dfe65adc52aa23c1f6d55c7f8ec"
  },
  {
    "url": "assets/img/lodash-v4.17.15-LazyWrapper.prototype.49da6e57.png",
    "revision": "db8ddc319b0ea91bf6ad41af6cee5476"
  },
  {
    "url": "assets/img/lodash-v4.17.15-lodash.prototype-mixin.d4e32ad2.png",
    "revision": "3a6736fda281783fe0ae4d823ee326ef"
  },
  {
    "url": "assets/img/lodash-v4.17.15-prototype.051978d0.png",
    "revision": "0b756fa659b3450810946c0aceca6fb7"
  },
  {
    "url": "assets/img/middleware.104a11b9.gif",
    "revision": "b353e7e458d7542b366c1139b01b1a07"
  },
  {
    "url": "assets/img/middleware.dabded55.png",
    "revision": "ad641f0658a8cfb4318ec29116a38dfd"
  },
  {
    "url": "assets/img/models.0be9c375.png",
    "revision": "62c210d99d9af8aaa2e1eccf88f9a426"
  },
  {
    "url": "assets/img/ningbo-1.a662cd2c.jpg",
    "revision": "b54fdfa9196d24aa9fea141929744597"
  },
  {
    "url": "assets/img/ningbo-2.3cac6c46.jpg",
    "revision": "00e9ed5d1716405d07b518d69066f4f1"
  },
  {
    "url": "assets/img/ningbo-3.994bfeae.jpg",
    "revision": "0c092f730c671166dc728d4ad4f4ca80"
  },
  {
    "url": "assets/img/ningbo-4.b299d53d.jpg",
    "revision": "835d750a7ec08627d57ec39339108384"
  },
  {
    "url": "assets/img/ningbo-5.fd7e73dc.jpg",
    "revision": "1aa00726f6b9f58d8c1af36e80628306"
  },
  {
    "url": "assets/img/ningbo-6.8cf9fa89.jpg",
    "revision": "83d4d519b759b2afb244c4b6739bdadd"
  },
  {
    "url": "assets/img/open-in-editor-error.4fae42eb.png",
    "revision": "4499ffe31234f71b5864c73d1910c360"
  },
  {
    "url": "assets/img/open-src-app.vue.51fd0181.png",
    "revision": "afa56f6d11d5ffb6d823dc0a47b1f083"
  },
  {
    "url": "assets/img/peixun.dc8dfd6c.png",
    "revision": "560d386bbd33cccac6113a1a332c3ac4"
  },
  {
    "url": "assets/img/ppt.ef9d4889.png",
    "revision": "b52b277e2ee495e7df0393bc81932eff"
  },
  {
    "url": "assets/img/ppt.f8929231.jpg",
    "revision": "f78b3146b0b91cb3903636e9c8ac3045"
  },
  {
    "url": "assets/img/qingbo.8f148848.jpg",
    "revision": "d74633ee61c67419b5ac29d9c82af7ee"
  },
  {
    "url": "assets/img/react-mini-book.39fdb881.jpg",
    "revision": "e5c31302307d0923e429c17af736d6ca"
  },
  {
    "url": "assets/img/react-mini-books.8230d170.jpg",
    "revision": "d93b9a0ed56c44c12969db1bb2e27d50"
  },
  {
    "url": "assets/img/redux-debugger.d32dcdeb.png",
    "revision": "c7b028bade361ff342fe7e0ef50c4329"
  },
  {
    "url": "assets/img/redux-middlewares.9052a675.png",
    "revision": "f51d01afab0a1bd73b496b0acd1eb40d"
  },
  {
    "url": "assets/img/redux-workflow.131e80ac.png",
    "revision": "058b254be2957fd452c2c4aadac0778a"
  },
  {
    "url": "assets/img/redux.middleware.drawio.a2ee8f2d.png",
    "revision": "3098634724c24611f4ebb590ea2d796e"
  },
  {
    "url": "assets/img/remote-wsl.1ae8bf85.png",
    "revision": "792601af28531aad211ec2976c343b4f"
  },
  {
    "url": "assets/img/request-promise-chain.ecb64ef1.png",
    "revision": "3b107392175d787039ecbf093b82cd07"
  },
  {
    "url": "assets/img/rest-time.18e6ec1a.jpg",
    "revision": "c83c84a35ea6b4507a41dd7fca6056ef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/search.b618b12f.png",
    "revision": "f3a4493af4c7212b14c18dd9bb10cee5"
  },
  {
    "url": "assets/img/stats-for-2019.9aba44ff.png",
    "revision": "9edf331d7b2f7d95f4d52a51c0d7b60e"
  },
  {
    "url": "assets/img/sun-1.b3cfb52a.jpg",
    "revision": "6733b11b754df3a0ee1ee63fadcd8e2a"
  },
  {
    "url": "assets/img/sun-2.063bacbc.jpg",
    "revision": "c1cd285ace775feb08b633b0b6ec4365"
  },
  {
    "url": "assets/img/terminal.f21f4c90.png",
    "revision": "a05d6e4f62e9a8f9fcbc6f1e2f852a9e"
  },
  {
    "url": "assets/img/ubuntu-20.04.995fdfbe.png",
    "revision": "3b8d7452e867621ca939ebc21fd7fa34"
  },
  {
    "url": "assets/img/umi-request-image.6331073d.png",
    "revision": "6f5fae9850f4158ba68499d70ebcb6ef"
  },
  {
    "url": "assets/img/underscore.js-chain.3af7400a.png",
    "revision": "a9b4485d3710c569092c2162e5f9d9f0"
  },
  {
    "url": "assets/img/underscore.js-prototype.c2832ff7.png",
    "revision": "5835daa943542730b4be8e3df54ad56f"
  },
  {
    "url": "assets/img/vuex-object.78ce46d1.png",
    "revision": "0d92f7b95841651de2e9dd91e4f1dc28"
  },
  {
    "url": "assets/img/vuex-provide-inject.71a64224.png",
    "revision": "e53b9e1858e429e14021389a0daacaf3"
  },
  {
    "url": "assets/img/vuex-store-module-collection-instance.ac24de4c.png",
    "revision": "b961cf50dd037bfd3450c2127526fb37"
  },
  {
    "url": "assets/img/vuex-store.instance.107e0c4d.png",
    "revision": "31dbf47b27ff6809578da78e645e8887"
  },
  {
    "url": "assets/img/wakatime.736cb455.png",
    "revision": "cd27916df9f4749ce1139c540f03cb0b"
  },
  {
    "url": "assets/img/wechat-mini.7279529a.jpg",
    "revision": "3f04b47d2f21019a671deda32d8e4b97"
  },
  {
    "url": "assets/img/wechat-official-accounts-mini.d9491f62.png",
    "revision": "648b6c1edaab513ed1501fa8ca3b0f12"
  },
  {
    "url": "assets/img/windows-feature.dd9b453c.png",
    "revision": "03903a67d1c35406b0629b7d3a1ce4c6"
  },
  {
    "url": "assets/img/windows-Terminal.ba6ca957.png",
    "revision": "240aef94f8cb44f6162242e8b33d4c8f"
  },
  {
    "url": "assets/img/wsl.1e046c7e.png",
    "revision": "60dc540ea79a7e5afc1cf8b80f112ee8"
  },
  {
    "url": "assets/img/xihu-1.c78290b4.jpg",
    "revision": "a0a27ec0742ded8559b6073531362856"
  },
  {
    "url": "assets/img/xihu-2.6f1ddf1b.jpg",
    "revision": "f017d9343f1424878ba6ad1d2cbcf8b4"
  },
  {
    "url": "assets/img/xihu-mid-1.e70f8f7c.jpg",
    "revision": "ea790a6a65d5b071c63a26fc81a8c247"
  },
  {
    "url": "assets/img/xihu-mid-2.399c7b63.jpg",
    "revision": "9a5e1e0dfb9ac01bfceb192d59204a00"
  },
  {
    "url": "assets/img/xiyang.6f0c260f.jpg",
    "revision": "dd3e5d881477bf52076da9575f09377d"
  },
  {
    "url": "assets/img/xmind.1bbf30f7.png",
    "revision": "3431560336939dfe852e198d8b4ee04a"
  },
  {
    "url": "assets/img/xmind.c2dfb2ce.png",
    "revision": "dcbd63ddef87c2009c3559401c507207"
  },
  {
    "url": "assets/img/yuque.ee2aae5c.png",
    "revision": "18c80c4aa8653c2d5620ec7ab4ba9b5c"
  },
  {
    "url": "assets/img/zhihu.29d99e05.jpg",
    "revision": "21d11afca5967c400dffee4c2e02d70f"
  },
  {
    "url": "assets/img/zhiwuyuan-1.1ab503ac.jpg",
    "revision": "b7fa737a916c80cfd90e5035d7c72a49"
  },
  {
    "url": "assets/img/zhiwuyuan-2.34211970.jpg",
    "revision": "ec3747636d792476240fb051bdfe617e"
  },
  {
    "url": "assets/img/zsxq.82930335.png",
    "revision": "b801ecc923d339646bf291f4d3d7faed"
  },
  {
    "url": "assets/img/zsxq.b2acbbd4.png",
    "revision": "21c2e2611b64a70e916dc2a29f6d6f10"
  },
  {
    "url": "assets/js/10.867aafa9.js",
    "revision": "f61e4926c21e452642122c0de6ba935d"
  },
  {
    "url": "assets/js/11.99f105e9.js",
    "revision": "2bd4a6509ae47e0c90d3d1879b0884a4"
  },
  {
    "url": "assets/js/12.26877e09.js",
    "revision": "8f347d44023b1676d376148e34d0d4f0"
  },
  {
    "url": "assets/js/13.80775f22.js",
    "revision": "ca21d55c8319d755b303fa2985a95fed"
  },
  {
    "url": "assets/js/14.a5598303.js",
    "revision": "567c73e73556b7484fe506fb9231814f"
  },
  {
    "url": "assets/js/15.2745a636.js",
    "revision": "636b4442c36f9758b81ccd8eb3263715"
  },
  {
    "url": "assets/js/16.9a3ee0bd.js",
    "revision": "36b46d7c92b516f597e3a078dd3f3ae9"
  },
  {
    "url": "assets/js/17.8efc7454.js",
    "revision": "0a17c48e6ffc2584e3ee18187cab7ede"
  },
  {
    "url": "assets/js/18.71996f86.js",
    "revision": "25675d3ee3b00650422da97d70d83ec8"
  },
  {
    "url": "assets/js/19.501576a4.js",
    "revision": "4e6361efe1941d172de4fb18fcfbe320"
  },
  {
    "url": "assets/js/2.bb92df1b.js",
    "revision": "b34405650d2fee70f4d66caf59ad62f8"
  },
  {
    "url": "assets/js/20.2085684b.js",
    "revision": "f259f0ec2f3077ad5ccb4019242a86e2"
  },
  {
    "url": "assets/js/21.8a4e0b44.js",
    "revision": "6310083f8421500fd5a062303a0ae839"
  },
  {
    "url": "assets/js/22.cb3784cb.js",
    "revision": "cb8df9a708fd3cd43f0e3f98fdf6ab1e"
  },
  {
    "url": "assets/js/23.87471f52.js",
    "revision": "b0255686ee8e203df8d39f9694f22cad"
  },
  {
    "url": "assets/js/24.6fd95574.js",
    "revision": "5ab5a277aeb3cc629cc77c0f963f26b0"
  },
  {
    "url": "assets/js/25.52480ac0.js",
    "revision": "c5c1963a7300379cefed0153d698a229"
  },
  {
    "url": "assets/js/26.8368f729.js",
    "revision": "0d42d2a60116ced8daf2e537704c747e"
  },
  {
    "url": "assets/js/27.fc5647ac.js",
    "revision": "2decfcfc757aaf219c35ed0f97125c16"
  },
  {
    "url": "assets/js/28.a274b94e.js",
    "revision": "eb11904992fa4a9e8c39cced12d6c738"
  },
  {
    "url": "assets/js/29.78f9ce2a.js",
    "revision": "4b8d38ae239750e8f92a9e3a2cd1ba90"
  },
  {
    "url": "assets/js/3.4e3e8054.js",
    "revision": "2926a93f963fd8316eebf3494202e251"
  },
  {
    "url": "assets/js/30.e0b04869.js",
    "revision": "21bd8b96ab28433af3538687b0d22c3d"
  },
  {
    "url": "assets/js/31.f6443387.js",
    "revision": "3b5dc90c72c4eef59db2a2a0ed7b82f9"
  },
  {
    "url": "assets/js/32.7eb37368.js",
    "revision": "e36cfe60d3af4a51b6a8125335afc0b1"
  },
  {
    "url": "assets/js/33.7f15a291.js",
    "revision": "be3da973b43d669a43a5d36dc6aeda38"
  },
  {
    "url": "assets/js/34.46c48e5b.js",
    "revision": "01783217d7876fbea29172e7f0a98382"
  },
  {
    "url": "assets/js/35.d3dece26.js",
    "revision": "a2a3115c15b6645a58fd8d842428d42a"
  },
  {
    "url": "assets/js/36.7cf82dc7.js",
    "revision": "b5e79b10fb6b27c9f31189c57c1a82e9"
  },
  {
    "url": "assets/js/37.9a2402be.js",
    "revision": "158af37ffd4423b73c8922183786a667"
  },
  {
    "url": "assets/js/38.d6b8cfb2.js",
    "revision": "4fa9fab2d739340360b911cd57a23123"
  },
  {
    "url": "assets/js/39.221a4fa4.js",
    "revision": "d7c39e7443425362786b243ea5c4d2dc"
  },
  {
    "url": "assets/js/4.24232fe9.js",
    "revision": "dd81872878dd98a49b0dc1acd77f26bc"
  },
  {
    "url": "assets/js/40.2f5865c2.js",
    "revision": "9c38fcfabd2c9b90704db07b4bc0384f"
  },
  {
    "url": "assets/js/41.320c1cbe.js",
    "revision": "1360880a663444c749d220b3201f868d"
  },
  {
    "url": "assets/js/42.7527ffe0.js",
    "revision": "aebea430c424083c8a3fdbd8a1bc0b80"
  },
  {
    "url": "assets/js/43.fe43b1cb.js",
    "revision": "1d3fe19653a7683bf1abfb56623d4b47"
  },
  {
    "url": "assets/js/44.8ee2bda7.js",
    "revision": "156a5b5b6f1a46bc596ad9af9d76fca5"
  },
  {
    "url": "assets/js/45.5089d816.js",
    "revision": "c1d2797b5a7e31e1c5cdb444736f0202"
  },
  {
    "url": "assets/js/46.c4643ea2.js",
    "revision": "cae2336b5f5085079096567598fddd8f"
  },
  {
    "url": "assets/js/47.e7978d5f.js",
    "revision": "61c98858b151bc453badd688e3df8c98"
  },
  {
    "url": "assets/js/48.f83fcac1.js",
    "revision": "8dbb9e0598e9bc97baa26396127f5559"
  },
  {
    "url": "assets/js/49.366b68aa.js",
    "revision": "8d29933478d21d96a8e013573648c010"
  },
  {
    "url": "assets/js/5.e1d26941.js",
    "revision": "5230751b7c4444474bc0339576104ab5"
  },
  {
    "url": "assets/js/50.dfc5606e.js",
    "revision": "dea09fd0cb7fba32f750eff7c0c0fc48"
  },
  {
    "url": "assets/js/51.8b5c616f.js",
    "revision": "df16cb953cfe72d1e878e6c4b35db934"
  },
  {
    "url": "assets/js/52.6c0ff3a0.js",
    "revision": "3961ddfe185f058f7a2ed0274fe82db6"
  },
  {
    "url": "assets/js/53.bf580946.js",
    "revision": "58a34f443226e7000d4065663a997f9f"
  },
  {
    "url": "assets/js/54.fdc247a0.js",
    "revision": "a6e227dd1a496772882f6c29731bb333"
  },
  {
    "url": "assets/js/55.e278588b.js",
    "revision": "2767574d5c3c41caf3b068a44cb90f14"
  },
  {
    "url": "assets/js/56.45d95e6b.js",
    "revision": "8bc775f144d9d90091e129968f902ef5"
  },
  {
    "url": "assets/js/6.e69ca8ad.js",
    "revision": "934d3a43417a100b93cef7ad2e212846"
  },
  {
    "url": "assets/js/7.016c39b8.js",
    "revision": "5b3a8e6cd6dac37ab57d910984c08a59"
  },
  {
    "url": "assets/js/8.d1912b52.js",
    "revision": "f5bf6b8dd8576ad78ec986c59569169d"
  },
  {
    "url": "assets/js/9.e247d6b7.js",
    "revision": "27e037aee10f8ff98ca8c544ed8788aa"
  },
  {
    "url": "assets/js/app.aca9512d.js",
    "revision": "48e570d5a73cd4607d32226f7d98690f"
  },
  {
    "url": "axios/index.html",
    "revision": "357e5ff72217545e3e15d11aa74e1248"
  },
  {
    "url": "bugsnag/index.html",
    "revision": "cacb63a84e217ff249b360b9b305e5e7"
  },
  {
    "url": "debounce/index.html",
    "revision": "2c5e17094dc227354e43686e3f63d2e5"
  },
  {
    "url": "goal/index.html",
    "revision": "47d41a7c50bd0be053031cb3ae2ceb28"
  },
  {
    "url": "http-server/index.html",
    "revision": "2b2ba9954ca171dcaf7ff42591969604"
  },
  {
    "url": "index.html",
    "revision": "a06f6cb75676099bf6a02acac5ce8d9c"
  },
  {
    "url": "jquery/index.html",
    "revision": "142302df0b31c71b63bce8df4fcf36c6"
  },
  {
    "url": "js-book/index.html",
    "revision": "8350b64203aa64773d3804913301a21e"
  },
  {
    "url": "js-extend/index.html",
    "revision": "f0c02bcfac4060e7cff3eb14ff2f8d40"
  },
  {
    "url": "js-implement-bind/index.html",
    "revision": "4ab817ce5d19c964dda28b5925944670"
  },
  {
    "url": "js-implement-call-apply/index.html",
    "revision": "33f38f13aae365114e84f7bcee862ea1"
  },
  {
    "url": "js-implement-new/index.html",
    "revision": "3f5f4505f64e08a53719361384e3e11b"
  },
  {
    "url": "js-object-api/index.html",
    "revision": "e17b12fa168cd0719c7e61fcbae2164e"
  },
  {
    "url": "js-this/index.html",
    "revision": "3c4ff9488baceef99604632776d278d4"
  },
  {
    "url": "koa/index.html",
    "revision": "3584920b9bb3680e60669e9e84802dc2"
  },
  {
    "url": "lodash/index.html",
    "revision": "9de6929d52d19ec51dab3934225045bf"
  },
  {
    "url": "lodash/README.all.html",
    "revision": "c430dad6b8bdb8ee266902b35c818f97"
  },
  {
    "url": "logo-2.jpg",
    "revision": "1e84ddf6d588fb361221dfb1faea3310"
  },
  {
    "url": "logo.jpg",
    "revision": "769116104df9bcebb50d88c62b024059"
  },
  {
    "url": "mini-webpack/index.html",
    "revision": "8feec43cafecffa526d25a8bce36bcfa"
  },
  {
    "url": "oh-my-zsh/index.html",
    "revision": "6c879db6af0d5ec5c3a8533b7e459a23"
  },
  {
    "url": "open-in-editor/index.html",
    "revision": "ab9648bbbd55ac5ecb40b358a80cf7a2"
  },
  {
    "url": "open-in-editor/mdnice.html",
    "revision": "f16cc5ce40ec3b93516cd4a3ed9a8747"
  },
  {
    "url": "poetry/2012-2016/index.html",
    "revision": "4067fb6c053e1989c781c128159150c3"
  },
  {
    "url": "poetry/2013/index.html",
    "revision": "f845912b6a9c1cb43d4c8300e0ef5d3d"
  },
  {
    "url": "posts/index.html",
    "revision": "d3a23b96cbf299cfce2679b1d2428d58"
  },
  {
    "url": "promise-serial/index.html",
    "revision": "452c3a0a215322b8bdcee474e6373ff3"
  },
  {
    "url": "puppeteer-create-pdf-and-merge/index.html",
    "revision": "69b3d957cfc9351b2bebb98bd0b59b5a"
  },
  {
    "url": "redux/index.html",
    "revision": "5468b878996172b02b9a69ae8121bfb2"
  },
  {
    "url": "sentry/index.html",
    "revision": "0beafccdd014c28893f413425d5a2a69"
  },
  {
    "url": "sentry/README-juejin.html",
    "revision": "b761a7bc7e7af81ced0e61e4081e7443"
  },
  {
    "url": "underscore/index.html",
    "revision": "634e06a50ff34048e517a2f2f3da3e6c"
  },
  {
    "url": "vue-2-qrcode/index.html",
    "revision": "d4a7c013c782abbfd1fda27e3af05dec"
  },
  {
    "url": "vue-cli-2-webpack/index.html",
    "revision": "892384ccd5d06b8e0fcb5f5954c4b955"
  },
  {
    "url": "vue-router/index.html",
    "revision": "106ec6d058110c72f9e91a89bf435d18"
  },
  {
    "url": "vue/index.html",
    "revision": "c2c3508fcfd4883012405716af4d0aa7"
  },
  {
    "url": "vuex/index.html",
    "revision": "e7bfea1863753c4100042025cf42b570"
  },
  {
    "url": "vuex4/index.html",
    "revision": "376f145092ea8162aff214f8de72071f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
