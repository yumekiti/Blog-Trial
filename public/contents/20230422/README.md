---
title: "vimにpluginを入れて育成を始める。"
date: "2023/05/09"
visual: "img1.png"
tags: ["vim", "linux"]
---

## プラグインマネージャーを選ぶ

vimのプラグインを管理する
プラグインマネージャーをインストールする

[参考サイト](https://qiita.com/kumamo-n/items/ddbb4fbe073873d90bba)

今回シンプルなvim-plugを採用

```
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

`vim .vimrc`に以下を追記

```
call plug#begin()
#インストールしたいプラグインのgithubのリポジトリを指定
call plug#end()
```

## プラグインを入れてみる

例えばvim内でgitが使える[tpope/vim-fugitive](https://github.com/tpope/vim-fugitive)を入れてみる。

`vim .vimrc`のリトポジ指定場所に以下を追記

```
set number

call plug#begin()

#追記内容
Plug 'tpope/vim-fugitive'

call plug#end()
```

vimを開き`:PlugInstall`でプラグインをインストールする。

vim内で`:Gstatus`と入力し実際に使ってみる！
> vim内に`git status`と同じ内容が表示されるはず、

## その他設定

vimに行番号などを表示するには.vimrcに以下を追記する

```
set number
```

## .vimrc最終的にどうなったか

```
set number

call plug#begin()
Plug 'tpope/vim-fugitive'
call plug#end()
```

# まとめ
このようにvimにpluginや行番号などの設定を変えて自分好みに
vimを育成もとい、カスタマイズをし**扱いやすいようにしましょう！**

## 動機
vimにプラグイン入れようかなと思った事とQiitaを始めてみたので投稿してみました。
初投稿で不備が多々あると思います(・。・)

### 動作環境
> ubuntu 20.04
