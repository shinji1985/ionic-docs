---
nextText: 'Core concepts'
nextUrl: '/docs/intro/concepts'
---

# Ionic Frameworkとは

<!-- TOC goes here -->

<p class="intro" markdown="1">
Ionic Frameworkは、Webテクノロジー（HTML、CSS、JavaScript）を使って、高性能かつ高品質なモバイルとデスクトップアプリケーションをつくるためのオープンソースのUIフレームワークです。
</p>
<p class="intro" markdown="1">
Ionic Frameworkは、フロントエンドにおけるUXと、アプリケーションにおけるUIインタラクション（操作性、インタラクション、ジェスチャー、アニメーション)に特化しています。学びやすく、Angularをはじめとしたライブラリ・フレームワークと一緒に使うことができます。また、フレームワークなしで簡単なJavaScriptのコードだけでIonic Frameworkを利用することもできます。
</p>
<p class="intro" markdown="1">
現在、Ionic Frameworkは<a href="https://angular.io/" target="_blank">Angular</a>を公式サポートしていますが、<strong>Vue</strong>と<strong>React</strong>のサポートも開発中です。 もし使い始める前にIonic Frameworkを詳しく知りたいなら、<a href="https://youtu.be/p3AN3igqiRc" target="_blank">基本を紹介した映像</a>をご覧ください。
</p>

## ゴール

### クロスプラットフォーム

iOSアプリ、Androidアプリ、ディスクトップアプリ、Progressive Web Appsといった複数のプラットフォームで動作するアプリケーションを1つのコードで構築・デプロイすることができます。一度書いたら、どこでも動きます。

### Web標準

Ionic Frameworkは信頼性の高い[Web標準](/docs/faq/glossary#web-standards)（HTML, CSS, and JavaScript）で構築されており、Custom ElementsやShadow DOMなど最新のWeb APIsを使っています。このため、IonicのComponentsはベンダーロックを受けることない安定したAPIを持っています。

### 美しいデザイン

きれいで、シンプルで機能的。Ionic Frameworkはすべてのプラットフォームですぐに使い始めることができます。
事前にデザインされたコンポーネント、タイポグラフィー、インタラクティブなパラダイム、すばらしい（しかし拡張可能な）基本テーマからはじめましょう！

### シンプル

Ionic Frameworkは簡単につくることができるので、Ionicアプリをつくることは楽しく、学びやすく、Webをつくることができるなら誰でも簡単に使うことができます。

## ライセンス

Ionic Framework is a free and open source project, released under the permissable <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>. This means it can be used in personal or commercial projects for free. MIT is the same license used by such popular projects as jQuery and Ruby on Rails.

This documentation content (found in the <a href="https://github.com/ionic-team/ionic-docs" target="_blank">ionic-docs</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.

## Ionic CLI

The official [Ionic CLI](/docs/cli), or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an [Ionic Pro](#ionic-pro) member, the CLI can be used to perform cloud builds and deployments, and administer your account.

## フレームワークの互換性

While past releases of Ionic were tightly coupled to Angular, V4 of the framework was re-engineered to work as a standalone Web Component library, with integrations for the latest JavaScript frameworks, like Angular. Ionic can be used
in most frontend frameworks with success, including React and Vue, though some frameworks need a shim for full Web Component support.

### JavaScript

One of the main goals with Ionic 4 was to remove any hard requirement on a single framework to host the components. This means the core components can work standalone with just a script tag in a web page. While working with frameworks can be great for larger teams and larger apps, it is now possible to use Ionic as a standalone library in a single page even in a context like WordPress.

### Angular

Angular has always been at the center of what makes Ionic great. While the core components have been written to work as a standalone Web Component library, the `@ionic/angular` package makes integration with the Angular ecosystem a breeze. `@ionic/angular` includes all the functionality that Angular developers would expect coming from Ionic 2/3, and integrates with core Angular libraries, like the Angular router.

### 今後のサポート

Support for other frameworks are expected in future release. Currently official bindings for Vue and React are being developed, though some components Just Work out of the box in those frameworks.

## Ionic Framework v4+

Ionic Framework V4 is a major advance in the underlying technology and capabilities of the project, with a focus on performance, compatibility, and overall extensibility. Although V4 still integrates deeply with Angular through the `@ionic/angular` package, it is now also framework-agnostic, meaning it can work with any other JavaScript framework (Vue, React, Preact, etc), or with no framework at all.

By moving to web standards, V4 allows the core of Ionic to rely on the standard component model supported in modern browsers, rather than a framework-specific model. This can mean faster load time, better performance, and less overall code.

## Ionic Pro

To help manage Ionic apps throughout their lifecycle, we also offer a commercial app platform for production apps called <a href="https://ionicframework.com/pro" target="_blank">Ionic Pro</a>, which is <strong>separate from the open source Framework.</strong>

Ionic Pro helps developers and teams monitor and track runtime errors, compile native app builds, and deploy live code updates to Ionic apps from a centralized dashboard. Pro requires an <a href="https://dashboard.ionicframework.com/signup" target="_blank">Ionic Account</a> and comes with a free “Starter” plan for those interested in playing around with some of its features. Optional upgrades to paid plans for more advanced capabilities and scale are available as well.

## エコシステム

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

### コミュニティに参加する

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

* <a href="https://forum.ionicframework.com/" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="https://ionicworldwide.herokuapp.com/" target="_blank">Slack:</a> A lively place for devs to meet and chat in real time.
* <a href="https://twitter.com/Ionicframework" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="https://github.com/ionic-team/ionic" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="https://ionicframework.com/contributors" target="_blank">Content authoring:</a> Write a technical blog or share your story with the Ionic community.
