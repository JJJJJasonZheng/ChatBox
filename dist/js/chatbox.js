/*!
 *   chatbox UI
 *   Author: Zander Wong (wzd@cn.gree.com)
 *   Contributor: Wenling Jiang
!*/


$(document).ready(function() {

    var msg_AutoReplyTemp = '<div class="direct-chat-msg"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left"></span><span class="direct-chat-timestamp pull-right"></span></div><div class="direct-chat-text"></div></div>';
    var msg_sendMsgTemp = '<div class="direct-chat-msg right"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-right"></span> <span class="direct-chat-timestamp pull-left"></span></div><div class="direct-chat-text"></div></div>';
    var msg_ReplyTemp = '<div class="direct-chat-msg"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left"></span><span class="direct-chat-timestamp pull-right"></span></div><div class="direct-chat-text"></div></div>';

    $('.input-group-btn button').click(function() {
        var input = $(this).parents("span").siblings('input[type=text]');
        if (input.val() != '') {
            sendmsg('玩家', 'dist/img/user.jpg', input.val(), true);
        }
    });

    $('.input-group input').keypress(function(e) {
        if (e.which == 13) {
            if ($(this).val() != '') {
                sendmsg('玩家', 'dist/img/user.jpg', $(this).val(), true);
            }
        }
    });

    var i = 0;

    function replymsg(name, img, msg, clear, r) {

        var inner = $('#chat-messages-inner');
        var time = moment().format('DD MMM hh:mm a');
        var id = 'msg-' + i;
        var idname = name.replace(' ', '-').toLowerCase();
        if (i != 1){
            if (r) {

                inner.append('<div id="' + id + '" class="direct-chat-msg"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left">' + name + '</span> <span class="direct-chat-timestamp pull-right">' + time + '</span></div><img class="direct-chat-img" src="' + img + '" alt="Message User Image" />' + '<div class="direct-chat-text">' + msg + '</div></div><br>');
            } else {
                inner.append('<div id="' + id + '" class="direct-chat-msg right"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-right">' + name + '</span> <span class="direct-chat-timestamp pull-left">' + time + '</span></div><img class="direct-chat-img" src="' + img + '" alt="Message User Image" />' + '<div class="direct-chat-text">' + msg + '</div></div><br>');
            }

            //$('#' + id).hide().fadeIn(800);
            $('#chat-messages').animate({
                scrollTop: inner.height()
            }, 1000); 
        }       
    }

    function sendmsg(name, img, msg, clear, r) {
        i = i + 1;

        var inner = $('#chat-messages-inner');
        var time = moment().format('DD MMM hh:mm a');
        var id = 'msg-' + i;
        var idname = name.replace(' ', '-').toLowerCase();
        if (r) {

            inner.append('<div id="' + id + '" class="direct-chat-msg"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-left">' + name + '</span> <span class="direct-chat-timestamp pull-right">' + time + '</span></div><img class="direct-chat-img" src="' + img + '" alt="Message User Image" />' + '<div class="direct-chat-text">' + msg + '</div></div><br>');
        } 
        else {
            inner.append('<div id="' + id + '" class="direct-chat-msg right"><div class="direct-chat-info clearfix"><span class="direct-chat-name pull-right">' + name + '</span> <span class="direct-chat-timestamp pull-left">' + time + '</span></div><img class="direct-chat-img" src="' + img + '" alt="Message User Image" />' + '<div class="direct-chat-text">' + msg + '</div></div><br>');
        
        }

        $('#' + id).hide().fadeIn(800);
        if (clear) {
            $('.input-group input').val('').focus();
        }
        $('#chat-messages').animate({
            scrollTop: inner.height()
        }, 1000);

        if (msg == '0505'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '请阅读 0505 的前辈笔记，并输入调查对象的名称:<br>( 如需提示可回复1.1 ）', false, true)
            }, '1200');              
        }
        else if(msg == '1.1'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示1.1: 请查看资助者的笔记，找到对应档案的两个字母和一个数字。<br>( 如需提示可回复1.2 ）', false, true)
            }, '1200');   
        }
        else if(msg == '1.2'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示1.2: 最下方的笔记是一个字谜，需要通过解出汉字找到对应的化石编号。<br>( 如需提示可回复1.3, 请注意接下来的提示涉嫌剧透。）', false, true)
            }, '1200');   
        }  
        else if(msg == '1.3'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示1.3: 字谜的答案是压，请找到压轴化石的对应编号。调查对象是个三字词语。', false, true)
            }, '1200');   
        }
        else if(msg == '美人鱼'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '美人鱼，又称人鱼，是一种长着人身鱼尾的神秘水生动物，多生活于海洋的水域之中，常出现于人类的童话、神话、志怪、玄幻小说或者古代传说。', false, true)
            }, '1200'); 
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '奇怪，美人鱼不是存在于人类童话中的虚构人物么？', false, true)
            }, '2400'); 
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '恭喜你通过了第一关。请阅读 0507 的前辈笔记，并输入推测死因：<br>( 如需提示可回复2.1 ）', false, true)
            }, '3600');   
        }   
        else if (msg == '0507'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '请阅读 0507 的前辈笔记，并输入推测死因：<br>( 如需提示可回复2.1 ）', false, true)
            }, '1200');              
        }
        else if(msg == '2.1'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示2.1: 上方的提示翻译过来是“跟随我的文字”，请注意 my words 二词被当作重点划出来了。题目的答案依旧是两个字母和一个数字。<br>( 如需提示可回复2.2 ）', false, true)
            }, '1200');   
        }
        else if(msg == '2.2'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示2.2: 这是一道连线题，你需要找出上下文字中， my 和 words 的字母并按词语的顺序链接。<br>( 如需提示可回复2.3, 请注意接下来的提示涉嫌剧透。）', false, true)
            }, '1200');   
        }  
        else if(msg == '2.3'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示2.3: 按文字中 words words my 的顺序链接后会得出 MM1 。找到对应的档案后，需要仔细观察详情图，判断这是自杀还是他杀。', false, true)
            }, '1200');   
        }
        else if(msg == '他杀'){
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '她身上多处伤痕究竟源于哪里？', false, true)
            }, '1200'); 
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '这条年轻的美人鱼死因究竟是什么？', false, true)
            }, '2400'); 
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '恭喜你通过了第二关。请阅读 0510 的前辈笔记，调查MM1化石中的项链，并输入其材质的化学式：<br>( 如需提示可回复3.1 ）', false, true)
            }, '3600');   
        }
        else if (msg == '0510'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '请阅读 0510 的前辈笔记，调查MM1化石中的项链，并输入其材质的化学式：<br>( 如需提示可回复3.1 ）', false, true)
            }, '1200');              
        }
        else if(msg == '3.1'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示3.1: 上方的三个材质分别是金、银和未知的化学材质。你需要找出这未知的化学材质是什么，而答案就藏在下方的化学结构中。<br>( 如需提示可回复3.2 ）', false, true)
            }, '1200');   
        }
        else if(msg == '3.2'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示3.2: 这是一道找不同的题目，请仔细观察化学结构中重复的部分，会有三处不同。这三个不同之处分别对应着两个字母和一个数字。<br>( 如需提示可回复3.3, 请注意接下来的提示涉嫌剧透。）', false, true)
            }, '1200');   
        }  
        else if(msg == '3.3'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示3.3: 你会找到斜着连接的“HC0"与其他结构不同，其中字母O形似数字0，注意区分。找到对应的档案后，你需要自己数出每个重复的单元中各个元素的数量，并推测出它的化学式，格式应该是(C?H?)n。', false, true)
            }, '1200');   
        }
        else if(msg == '(C2H4)n'){
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '百科告诉我这是一种在人类时期被大量生产的材质，专家推测这种高分子合成物在当时属于一种便于生产并造价便宜的选择。', false, true)
            }, '1200'); 
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '聚乙烯感觉不是很适合做贵重项链的材质。这条项链或许就是因为廉价，所以未被拿走。', false, true)
            }, '2400'); 
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '恭喜你通过了第三关。请阅读 0515 的前辈笔记，并输入这种材质的常用名称：<br>( 如需提示可回复4.1 ）', false, true)
            }, '3600');   
        }          
        else if (msg == '0515'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '请阅读 0515 的前辈笔记，并输入这种材质的常用名称：<br>( 如需提示可回复4.1 ）', false, true)
            }, '1200');              
        }
        else if(msg == '4.1'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示4.1: 请查看MM1档案里的经纬度，并找出对应的码头名称。<br>( 如需提示可回复4.2 ）', false, true)
            }, '1200');   
        }
        else if(msg == '4.2'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示4.2: 请利用找到的名称帮你解出背面的谜题，每个问号都对应着名称中的一个字符。答案依旧是对应档案编号的两个字母和一个数字。<br>( 如需提示可回复4.3, 请注意接下来的提示涉嫌剧透。）', false, true)
            }, '1200');   
        }  
        else if(msg == '4.3'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示4.3: 码头的名称应该是“Pier 39”，谜题考的是一道数学常识，该名称的前两个字母对应着前两个问号，而第一个数字则对应着第三个问号。找到档案后，请观察检测物品，输入一个二字词语。（可以重点注意“一次性”这三个字）', false, true)
            }, '1200');   
        }
        else if(msg == '塑料'){
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '人类时期的塑料制品真是无处不在啊。', false, true)
            }, '1200'); 
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '恭喜你通过了第四关。请阅读 0520 的前辈笔记，并输入杀死美人鱼的凶器：<br>( 如需提示可回复5.1 ）', false, true)
            }, '2400');   
        }
        else if (msg == '0520'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '请阅读 0520 的前辈笔记，并输入杀死美人鱼的凶器：<br>( 如需提示可回复5.1 ）', false, true)
            }, '1200');              
        }
        else if(msg == '5.1'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示5.1: 请观察MM1档案里的项链长度，并参考模拟图中的长度找出对应的数字。<br>( 如需提示可回复5.2 ）', false, true)
            }, '1200');   
        }
        else if(msg == '5.2'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示5.2: 请注意图中角落里的A和Z，并留意模拟图中的格子背景。答案依旧是对应档案编号的两个字母和一个数字。<br>( 如需提示可回复5.3, 请注意接下来的提示涉嫌剧透。）', false, true)
            }, '1200');   
        }  
        else if(msg == '5.3'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示5.3: 项链长度所对应的数字是4。从角落里的A数到Z，背景的格子应该刚好有26个，每个格子分别代表一个字母，请推测出数字4所在的坐标。档案编号就是横坐标的字母+竖坐标的字母+4。', false, true)
            }, '1200');   
        }
        else if(msg == '项链'){
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '过紧的项链可能造成进食和呼吸困难，从而导致营养不良，甚至是窒息而死的案例。所以这条“项链”大概率就是这件谋杀案的关键性凶器。', false, true)
            }, '1200'); 
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '这让我陷入沉思，是谁让这条美人鱼带上了让她带上了死亡的枷锁呢？', false, true)
            }, '2400'); 
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '恭喜你通过了第五关。请阅读 0528 的前辈笔记，并输入“美人鱼”的真实身份：<br>( 如需提示可回复6.1 ）', false, true)
            }, '3600');   
        }
        else if (msg == '0528'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '请阅读 0528 的前辈笔记，并输入“美人鱼”的真实身份：<br>( 如需提示可回复6.1 ）', false, true)
            }, '1200');              
        }
        else if(msg == '6.1'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示6.1: 请对比未知基因序列与两条已知基因序列之间的相似度，利用同源性分析进行解谜。<br>( 如需提示可回复6.2 ）', false, true)
            }, '1200');   
        }
        else if(msg == '6.2'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示6.2: 相似程度越高是一种生物的可能性就越高。答案依旧是对应档案编号的两个字母和一个数字。<br>( 如需提示可回复6.3, 请注意接下来的提示涉嫌剧透。）', false, true)
            }, '1200');   
        }  
        else if(msg == '6.3'){
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '提示6.3: 请猜出被空白格遮住的部分，并输入这种生物的名称。', false, true)
            }, '1200');   
        }
        else if(msg == '海狮'){
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '我翻阅到了许多三千年前大批海狮海豹因海洋垃圾惨死的报道，这让我有些难受。', false, true)
            }, '1200'); 
            setTimeout(function() {
                replymsg('月朗', 'dist/img/yuelang.jpg', '塑料的存在让那么多无辜的生命惨死在白色的海洋中，为什么当初的人类没有选择及时制止这种惨案发生呢？', false, true)
            }, '2400'); 
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '恭喜你通过了第六关。至此，你已经破解了第一份档案，不知道你是否喜欢这份开胃小菜？请关注后续的其他包裹，它们隐藏着更大的真相。', false, true)
            }, '3600');   
        }          
        else{
            setTimeout(function() {
                replymsg('服务器', 'dist/img/system.jpg', '无法检测到相关内容，请重试。', false, true)
            }, '1200');   
        }    
    }

    // TOTO:customerService AutoReply
    setTimeout(function() {
        sendmsg('服务器', 'dist/img/system.jpg', '欢迎来到月朗的线上服务器。<br>请按 MMDD 的格式输入你所探索的日期: ', false, true)
    }, '600');

});
