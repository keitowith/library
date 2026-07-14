/* ================================================================
   以下、Builder で選択したパーツのJS（自動連結）
   ================================================================ */

/* ---- 縦書き見出し・本文セット（title11） (title11) ---- */
//===============================================================
// テキストのフェードイン効果
//===============================================================
$(function() {
    $('.fade-in-text-parts').on('inview', function(event, isInView) {
        // この要素が既にアニメーションされたかどうかを確認
        if (isInView && !$(this).data('animated')) {
            // アニメーションがまだ実行されていない場合
            let innerHTML = '';
            const text = $(this).text();
            $(this).text('');

            for (let i = 0; i < text.length; i++) {
                innerHTML += `<span class="char" style="animation-delay: ${i * 0.2}s;">${text[i]}</span>`;
            }

            $(this).html(innerHTML).css('visibility', 'visible');
            // アニメーションが実行されたことをマーク
            $(this).data('animated', true);
        }
    });
});
