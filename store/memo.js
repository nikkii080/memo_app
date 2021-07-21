export const state = () => ({
    memo: [],
})

export const mutations = {
    insert: function(state, obj) {
        const d = new Date();
        //日付用変数を用意
        let fmt;
        //今日の日付をfmtに入れる
        fmt = `${d.getMonth() + 1}月 ${d.getDate()}日 ${d.getHours()}時 ${d.getMinutes()}分`
        state.memo.unshift({
            title: obj.title,
            content: obj.content,
            //日付用のプロパティを作成
            created: fmt
        });
    },
    remove: function(state, obj) {
        //state.memoから該当のメモを削除
        // state.memo.splice(該当の配列,1)
        console.log(obj)
        var num = 0;
        for (let i = 0; i < state.memo.length; i++) {
            const ob = state.memo[i];
            if (ob.title == obj.title 
                    && ob.content == obj.content
                    && ob.created == obj.created){
                alert('remove it! --' + ob.title);
                state.memo.splice(i, 1);
                return;
            }
        }
    }
}