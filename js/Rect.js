/**
 * Copyright © 2020 T.Kawamata. All rights reserved.
 * 矩形を描画するクラス
 */
class Rect {

    // 時間からオブジェクトのidを生成
    id = new Date().getTime().toString(16);

    /**
     * コンストラクタ
     * @param {str}} targetID 
     */
    constructor(targetID) {
        this.init(targetID); // オーバーライド用に初期化処理を分離
    }

    /**
     * 初期化
     * @param {str} targetID 矩形を描画する要素のid
     */
    init(targetID) {

        // 対象要素とその親要素を取得
        this.rectTarget = document.getElementById(targetID);
        this.rectTargetParent = rectTarget.parentNode;

        // 対象要素のサイズと親要素のサイズを同一化
        this.rectTargetParent.style.width = this.rectTarget.clientWidth + "px";
        this.rectTargetParent.style.height = this.rectTarget.clientHeight + "px";

        // ブラウザをリサイズした場合は再度親要素を設定
        window.addEventListener('resize', () => {
            this.rectTargetParent.style.width = this.rectTarget.clientWidth + "px";
            this.rectTargetParent.style.height = this.rectTarget.clientHeight + "px";
        }, false);

        // 矩形要素を生成
        this.rect = document.createElement("div");
        this.rect.id = "pop-" + this.id;
        this.rect.classList.add("rect"); // rectスタイルを指定（？）
        this.hide(); // 矩形を非表示
        this.rectTargetParent.appendChild(this.rect); // 矩形を親要素に追加

    }

    /**
     * 指定された座標に矩形を表示
     * @param {int} x 対象要素の縦位置
     * @param {int} y 対象要素の横位置
     * @param {int} w 横幅
     * @param {int} h 縦幅
     */
    put(x, y, w, h) {

        this.rect.style.display = ""; // 矩形を表示
        this.rect.style.left = x + "%";
        this.rect.style.top = y + "%";
        this.rect.style.width = w + "%";
        this.rect.style.height = h + "%";

    }

    /**
     * 要素を非表示化
     */
    hide() {
        this.rect.style.display = "none";
    }
}