qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.plural={processors:{en:function(a,b){var c=_.toJSON(b.toString());return 1==a?c[0]:c[1]},ru:function(a,b){var c=_.toJSON(b.toString());return 1==a%10&&11!=a%100?c[0]:a%10>=2&&4>=a%10&&(10>a%100||a%100>=20)?c[1]:c[2]},ko:function(a,b){var c=_.toJSON(b.toString());return c[0]},ja:function(a,b){var c=_.toJSON(b.toString());return c[0]},zh:function(a,b){var c=_.toJSON(b.toString());return c[0]}},item:{en:'["item", "items"]',ru:'["товар", "товара", "товаров"]'}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.itemlist={Link:{en:"Link",ru:"Ссылка"},Title:{en:"Title",ru:"Название"},"Price, RUB":{en:"Price, RUB",ru:"Цена, руб."},Add:{en:"Add",ru:"Добавить"},"Add item":{en:"Add item",ru:"Добавить продукт"},On:{en:"On",ru:"Вкл"},Off:{en:"Off",ru:"Откл"},title:{en:"title",ru:"название"},price:{en:"price",ru:"цена, руб"},visits:{en:"visits",ru:"просмотры"},sold:{en:"sold",ru:"куплено"},CTR:{en:"CTR",ru:"CTR, %"},overall:{en:"overall",ru:"итого, руб"},"Do you want to delete this item?":{en:"Do you want to delete this item?",ru:"Вы точно хотите удалить этот товар?"},"Something went wrong...":{en:"Something went wrong...",ru:"Что-то пошло не так :("},Delete:{en:"Delete",ru:"Удалить"},"Item deleted.":{en:"Item deleted.",ru:"Товар удален."},Cancel:{en:"Cancel",ru:"Отмена"},Ok:{en:"Ok",ru:"Ок"},"After payment":{en:"After payment",ru:"После оплаты"},"give a link":{en:"give a link",ru:"отдавать ссылку"},"give a file":{en:"give a file",ru:"отдавать файл"},"give nothing":{en:"give nothing",ru:"ничего не отдавать"},"write some name of the item":{en:"write some name of the item",ru:"назовите ваш товар"},"set price, please":{en:"set price, please",ru:"задайти цену, пожалуйста"},"set a link, please":{en:"set a link, please",ru:"задайти ссылку, пожалуйста"},"set a valid link, please":{en:"set a valid link, please",ru:"задайти существующую ссылку, пожалуйста"},"Drop or choose a file":{en:"Drop or choose a file",ru:"Перетащите сюда файл или вы можете его выбрать"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.itemedit={Main:{en:"Main",ru:"Основное"},Showcase:{en:"Showcase",ru:"Витрина"},"Purchase finish":{en:"Purchase finish",ru:"Завершение покупки"},Buyers:{en:"Buyers",ru:"Покупатели"},"Available or purchase":{en:"Available or purchase",ru:"Доступно к покупке"},Descrition:{en:"Descrition",ru:"Описание"},"Clicking on that link your customers will get a purchase screen":{en:"Clicking on that link your customers will get a purchase screen",ru:"Перейдя по этой ссылке ваши пользователи откроют окно оплаты."},"Spread the word on your site, on blog or social networks":{en:"Spread the word on your site, on blog or social networks",ru:"Размещайте ссылку на вашем сайте, в блоге, в личных сообщениях или социальных сетях:"},Save:{en:"Save",ru:"Сохранить изменения"},"Remove link":{en:"Remove link",ru:"Удалить"},"Link for purchasing:":{en:"Link for purchasing:",ru:"Ссылка для оплаты:"},"Share on Vkontakte":{en:"Share on Vkontakte",ru:"Опубликовать Вконтакте"},"Share on Facebook":{en:"Share on Facebook",ru:"Опубликовать на Фейсбук"},"Share on Twitter":{en:"Share on Twitter",ru:"Опубликовать в Твиттер"},email:{en:"email",ru:"электронная почта"},"for notifications about your purchases<br/>and feedback":{en:"for notifications about your purchases<br/>and feedback",ru:"для уведомлений о ваших покупках<br/>и обратной связи"},Buy:{en:"Buy",ru:"Купить"},"selling in lightning speed":{en:"selling in lightning speed",ru:"молниеносные продажи"},"It is a preview of the purchase page your customers will see":{en:"It is a preview of the purchase page your customers will see",ru:"Таким будет экран покупки для ваших покупателей"},"Your message on the receipt":{en:"Your message on the receipt",ru:"Ваше сообщение на чеке"},"It is a receipt your customers will see":{en:"It is a receipt your customers will see",ru:"Таким будет финальный экран для ваших покупателей"},"Link for purchase":{en:"Link for purchase",ru:"Ссылка для оплаты"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.itemedit_menu={Main:{en:"Main",ru:"Основное"},Showcase:{en:"Showcase",ru:"Витрина"},"Purchase finish":{en:"Purchase finish",ru:"Завершение покупки"},Buyers:{en:"Buyers",ru:"Покупатели"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.preview_upload={"Add preview":{en:"Add preview",ru:"Добавить картинку"},"jpg, png or gif. The image will be resized to 320px x 180px":{en:"jpg, png or gif. The image will be resized to 320px x 180px",ru:"Формат jpg, png, gif. Изображение будет уменьшено до размера 310 x 180 пикселей"},"Add another":{en:"Add another",ru:"Другая картинка"},"Remove preview":{en:"Remove preview",ru:"Удалить картинку"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.item={Share:{en:"Share",ru:" Рассказать друзьям:"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.header={items:{en:{itemlist:{title:"Items",description:""},itemedit:{title:"Product edit",description:""},er404:{title:"404",description:"Sorry, the page you were looking for doesn’t exist"},er403:{title:"403",description:"Access denied"},defaults:{title:"Default",description:"So i'm so default"}},ru:{itemlist:{title:"Товары",description:""},itemedit:{title:"Редактирование товара",description:""},er404:{title:"404",description:"Страницы, которую вы пытаетесь открыть, здесь нет."},er403:{title:"403",description:"Ошибка доступа"},defaults:{title:"Default",description:"So i'm so default"}}}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.time={m:{en:"m",ru:"м",ko:"분",ja:"分",zh:"分钟"},h:{en:"h",ru:"ч",ko:"시간",ja:"時間",zh:"小时"},d:{en:"d",ru:"дн",ko:"일",ja:"日",zh:"天"},y:{en:"y",ru:"г",ko:"년",ja:"年",zh:"年"},"long time":{en:"long time",ru:"давным давно",ko:"오래",ja:"ずっと",zh:"长时间"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.misc={by:{en:"by",ru:" "},"Something went wrong...":{en:"Something went wrong...",ru:"Что-то пошло не так…"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.currency={RUB:{en:"rub",ru:"р."}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.auth={"Log in":{en:"Log in",ru:"Вход",ko:"로그인",ja:"ログイン",zh:"登录"},Facebook:{en:"Facebook",ru:"Facebook",ko:"Facebook",ja:"Facebook",zh:"Facebook"},Twitter:{en:"Twitter",ru:"Twitter",ko:"Twitter",ja:"Twitter",zh:"Twitter"},VKontakte:{en:"VKontakte",ru:"ВКонтакте",ko:"VKontakte",ja:"VKontakte",zh:"VKontakte"},"Register by e-mail":{en:"Register by e-mail",ru:"Регистрация через e-mail",ko:"이메일로 가입하세요",ja:"メールで登録",zh:"使用电子邮件注册"},"Sign up":{en:"Sign up",ru:"Регистрация",ko:"가입하기",ja:"サインアップ",zh:"注册"},"E-mail &amp; password":{en:"E-mail &amp; password",ru:"E-mail &amp; Пароль",ko:"이메일 &amp; 비밀번호",ja:"メールアドレス &amp; パスワード",zh:"电子邮箱 &amp; 密码"},"Account information":{en:"Account information",ru:"Информация об аккаунте",ko:"계정 정보",ja:"アカウント情報",zh:"账户信息"},"E-mail":{en:"E-mail",ru:"E-mail",ko:"이메일",ja:"メールアドレス",zh:"电子邮箱"},Password:{en:"Password",ru:"Пароль",ko:"비밀번호",ja:"パスワード",zh:"密码"},"First name":{en:"First name",ru:"Имя",ko:"이름",ja:"名",zh:"名字"},"Last name":{en:"Last name",ru:"Фамилия",ko:"성",ja:"姓",zh:"姓氏"},"Log in by e-mail":{en:"Log in by e-mail",ru:"Войти с помощью e-mail",ko:"이메일로 로그인",ja:"メールでログイン",zh:"用电邮登陆"},"Log in / sign up":{en:"Log in / sign up",ru:"Вход / Регистрация",ko:"로그인 / 가입하기",ja:"ログイン / サインアップ",zh:"登陆 / 注册"},"Forgot?":{en:"Forgot?",ru:"Забыли?",ko:"잊으셨나요?",ja:"お忘れですか？",zh:"忘记密码？"},"Log in":{en:"Log in",ru:"Вход",ko:"로그인",ja:"ログイン",zh:"登陆"},"Doesn&#39;t look like a valid email!":{en:"Doesn&#39;t look like a valid e-mail",ru:"Неправильный формат e-mail",ko:"유효한 이메일이 아닙니다",ja:"有効でないメールアドレスです",zh:"不可用的电子邮件"},"Do you have an empty password?":{en:"Do you have an empty password?",ru:"Do you have an empty password?",ko:"Do you have an empty password?",ja:"Do you have an empty password?",zh:"Do you have an empty password?"},"Please use at least 6 characters":{en:"Please use at least 6 characters",ru:"Используйте не менее 6 символов",ko:"적어도 6자를 사용하십시오",ja:"最低6文字使用して下さい",zh:"请至少输入6个字符"},"You can&#39;t use more than 16 characters":{en:"You can&#39;t use more than 16 characters",ru:"Вы можете использовать не более 16 символов",ko:"16자 이상을 사용할 수 없습니다",ja:"16文字以上の使用はできません",zh:"不能超过16个字符"},"Enter your first name":{en:"Enter your first name",ru:"Введите имя",ko:"이름 입력",ja:"名を入力",zh:"输入你的名字"},"Enter your last name":{en:"Enter your last name",ru:"Введите фамилию",ko:"성 입력",ja:"姓を入力",zh:"输入你的姓氏"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.warning={"Warning!":{en:"Warning!",ru:"Предупреждение!",ko:"경고!",ja:"ご注意！",zh:"警告！"},Ok:{en:"Ok",ru:"Ок",ko:"오케이",ja:"OK",zh:"确定"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.p404={"Make sure that URL entered correctly;":{en:"Make sure that URL entered correctly;",ru:"Убедитесь, что ссылка введена правильно;",ko:"URL을 정확히 입력하세요;",ja:"正確にURLが入力されたか確認して下さい",zh:"请输入正确的URL"},"You can also Search for this user, photo or story;":{en:"You can also Search for this user, photo or story;",ru:"Вы также можете попробовать Найти этого пользователя, фотографию или историю;",ko:"이 사용자, 포토 또는 스토리를 검색할 수 있어요.",ja:"このユーザー、フォト、ストーリーを検索することも可能です。",zh:"你也可以搜索这个用户、照片或者故事。"},'or drop us a line to <a href="mailto:hi@weheartpics.com" class="lnk">hi@weheartpics.com.</a>':{en:'or drop us a line to <a href="mailto:hi@weheartpics.com" class="lnk">hi@weheartpics.com.</a>',ru:'Или напишите нам — <a href="mailto:hi@weheartpics.com" class="lnk">hi@weheartpics.com</a>',ko:'또는 여기로 메시지를 보내주세요 <a href="mailto:hi@weheartpics.com" class="lnk">hi@weheartpics.com</a>',ja:'もしくは<a href="mailto:hi@weheartpics.com" class="lnk">hi@weheartpics.com.</a>にメッセージを送信して下さい。',zh:'或者给我们写信 <a href="mailto:hi@weheartpics.com" class="lnk">hi@weheartpics.com.</a>'}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.p403={'Sorry, can’t let you get any further than this.<br/>Please <a href="auth:show" type="event" class="lnk">log in</a> or <a  href="auth:show" type="event" class="lnk">sign up</a> to see this page.':{en:'Sorry, can’t let you get any further than this.<br/>Please <a href="auth:show" type="event" class="lnk">log in</a> or <a  href="auth:show" type="event" class="lnk">sign up</a> to see this page.',ru:'Мы сейчас не можем показать вам эту страницу.<br/>Чтобы увидеть страницу, вам нужно <a href="auth:show" type="event" class="lnk">Авторизоваться</a> или <a  href="auth:show" type="event" class="lnk">Зарегистрироваться</a>.',ko:'죄송해요, 더는 접근이 불가능하네요. <br/><a href="auth:show" type="event" class="lnk">로그인나</a> <a  href="auth:show" type="event" class="lnk">가입하기</a> 주세요.',ja:'すみません、これ以上アクセスはできません。<br/><a href="auth:show" type="event" class="lnk">ログイン</a>か<a  href="auth:show" type="event" class="lnk">サインアップ</a>下さい',zh:'对不起，你不能再继续前进了。请<a href="auth:show" type="event" class="lnk">登录</a>或者<a  href="auth:show" type="event" class="lnk">注册</a>。'}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.landing_page={"Sign up now":{en:"Sign up now",ru:"Регистрация",ko:"지금 가입하세요",ja:"サインアップ",zh:"现在注册"},"Grow your network":{en:"Grow your network",ru:"Знакомьтесь",ko:"나의 네트워크를 키워보세요",ja:"ネットワークを大きくする",zh:"拓展你的网络"},"<strong>Connect</strong> with friends and <strong>meet</strong> new interesting people.":{en:"<strong>Connect</strong> with friends and <strong>meet</strong> new interesting people.",ru:'<strong>Поддерживайте связь</strong> с друзьями и <strong>знакомьтесь</strong> с новыми <br class="hbr"/>интересными <br class="hbr"/>людьми.',ko:"친구들과 <strong>연결하고</strong> 관심 있는 새로운 사람들과 <strong>만나기</strong>.",ja:"友人と<strong>つながって</strong>関心ののある新しい人と<strong>出会おう</strong>。",zh:"和好友<strong>互动</strong><strong>认识</strong>有趣的新朋友"},'Follow other users <br class="hbr"/>to build your own <br class="hbr"/>personalized <br class="hbr"/><strong>Photo Feed</strong>.':{en:'Follow other users <br class="hbr"/>to build your own <br class="hbr"/>personalized <br class="hbr"/><strong>Photo Feed</strong>.',ru:'Добавляйте их <br class="hbr"/>в свою <strong>Фотоленту</strong>, <br class="hbr"/>чтобы <br class="hbr"/>не пропустить <br class="hbr"/>новые фотографии.',ko:"나만의 맞춤형 <strong>포토 모아보기</strong>를 만들려면 다른 사람들을 팔로우하세요.",ja:"あなた自身の個人的な<strong>フォトデータ</strong>を作って他のユーザーをフォローしよう。",zh:"关注其他用户，创建你自己的私人<strong>照片库</strong>。"},"Take great shots and&nbsp;show them off":{en:"Take great shots and&nbsp;show them off",ru:"Делитесь&nbsp;отличными снимками",ko:"멋지게 사진을 찍어 자랑하기",ja:"素敵なショットを取って見せてあげて",zh:"拍摄精美照片，向别人展示"},"Use any one of our hundreds of&nbsp;ideas and compete in Daily stories!":{en:"Use any one of our hundreds of&nbsp;ideas and compete in Daily stories!",ru:"Вдохновляйтесь сотнями идей, которые мы приготовили,&nbsp;и участвуйте в Истории дня.",ko:"수백 가지의 아이디어 중 하나를 정해서 일상 스토리에서 참여하세요!",ja:"当社の多数のアイデアからひとつ選んで、デイリーストーリーを完成させよう！",zh:"从我们几百个想法中选取其一，完成每日故事！"},"<strong>Upload</strong> photos to one of our categories, tag your friends and&nbsp;the&nbsp;place where you took your picture, then easily <strong>share</strong> your work.":{en:"<strong>Upload</strong> photos to one of our categories, tag your friends and&nbsp;the&nbsp;place where you took your picture, then easily <strong>share</strong> your work.",ru:"<strong>Отмечайте</strong> друзей и&nbsp;места, где были сделаны фотографии, и <strong>делитесь</strong> результатом.",ko:"카테고리 중 하나에 사진을 <strong>업로드</strong> 하고, 친구와 사진을 찍은 장소를 태그해서 손쉽게 <strong>공유</strong> 하세요.",ja:"カテゴリーのひとつにフォトを<strong>アップロード</strong>し、友人と写真が見える場所をタグし、簡単にあなたの作品を<strong>シェア</strong> しよう。",zh:"<strong>上传</strong>照片到某一个类别，为你的好友和照片拍摄地标注标签，然后轻松<strong>分享</strong>你的作品。"},'Communicate <br class="thbr"/>with like&nbsp;minded people':{en:'Communicate <br class="thbr"/>with like&nbsp;minded people',ru:'Общайтесь <br class="thbr"/>с близкими',ko:"비슷한 생각을 하는 사람들과 수다 나누기",ja:"ウマが合う人とコミュニケーションを取ろう",zh:"和志同道合的人交流"},"Make your messages picture perfect with <strong>Dialogs</strong>.":{en:"Make your messages picture perfect with <strong>Dialogs</strong>.",ru:"Разговаривайте с помощью фотографий в <strong>Диалогах</strong>.",ko:"나의 메시지 사진을 <strong>대화</strong>와 딱 맞춰 보세요.",ja:"<strong>ダイアログ</strong>で完璧な写真のメッセージを作成しよう。",zh:"让你的信息图片和<strong>会话</strong>完美结合。"},"Send messages, photos, and&nbsp;emoticons to share what&nbsp;you see or&nbsp;how you feel.":{en:"Send messages, photos, and&nbsp;emoticons to share what&nbsp;you see or&nbsp;how you feel.",ru:"Отправляйте сообщения, фотографии и&nbsp;смайлики, чтобы поделиться впечатлениями.",ko:"내가 보는 세상과 내가 느끼는 감성을 공유하도록 메시지, 사진 및 이모티콘을 전하세요.",ja:"何を見て、どう思っているかをシェアするのにメッセージ、フォト、顔アイコンを送信しよう。",zh:"发送信息、照片和表情来分享你的见闻和感受。"},Multiplatform:{en:"Multiplatform",ru:"На всех платформах",ko:"다중플랫폼",ja:"マルチプラットフォーム",zh:"多平台"},'A one-of-a-kind, photo-powered, full&#8209;featured social network available&nbsp;at <a href="{{_itunes_link}}" target="_blank">App&nbsp;Store</a> and&nbsp;<a href="https://play.google.com/store/apps/details?id=com.weheartpics" target="_blank">Google&nbsp;Play</a>.':{en:'A one-of-a-kind, photo-powered, full&#8209;featured social network available&nbsp;at <a href="'+Handlebars.helpers._itunes_link()+'" target="_blank">App&nbsp;Store</a> and&nbsp;<a href="https://play.google.com/store/apps/details?id=com.weheartpics" target="_blank">Google&nbsp;Play</a>.',ru:'Единственная полноценная социальная сеть, основанная на фотографиях, доступна&nbsp;в <a href="'+Handlebars.helpers._itunes_link()+'" target="_blank">App&nbsp;Store</a> и&nbsp;<a href="https://play.google.com/store/apps/details?id=com.weheartpics" target="_blank">Google&nbsp;Play</a>.',ko:'독특한, 사진 중심의 모든 기능을 갖춘 소셜 네트워크를 <a href="'+Handlebars.helpers._itunes_link()+'" target="_blank">App Store와</a> <a href="https://play.google.com/store/apps/details?id=com.weheartpics" target="_blank">Google Play서</a> 찾을 수 있습니다.',ja:'他にない、フォトパワーのある、フル機能のソーシャルネットワークが<a href="'+Handlebars.helpers._itunes_link()+'" target="_blank">App Store</a>でと<a href="https://play.google.com/store/apps/details?id=com.weheartpics" target="_blank">Google Play</a>で可能です。',zh:'一个独一无二、以照片为载体、全功能的社交网络，可在<a href="'+Handlebars.helpers._itunes_link()+'" target="_blank">苹果软件商店</a>和<a href="https://play.google.com/store/apps/details?id=com.weheartpics" target="_blank">谷歌应用商店</a>上轻松获取。'},'Our new website and iPad&nbsp;version <br class="thbr">are almost ready!':{en:'Our new website and iPad&nbsp;version <br class="thbr">are almost ready!',ru:'Обновленный сайт и версия&nbsp;для&nbsp;iPad <br class="thbr">почти готовы!',ko:"신규 웹사이트 및 아이패드 버전이 곧 출시될 예정이에요!",ja:"当社の新しいウェブサイトとiPadバージョンはもうすぐ！",zh:"我们的新网站和iPad版本已经基本准备就绪！"},"Sign up with one click":{en:"Sign up with one click",ru:"Зарегистрируйтесь в один клик",ko:"한 번의 클릭으로 가입하기",ja:"ワンクリックでサインアップ",zh:"轻轻一点即可注册"},Facebook:{en:"Facebook",ru:"Facebook",ko:"Facebook",ja:"Facebook",zh:"Facebook"},Twitter:{en:"Twitter",ru:"Twitter",ko:"Twitter",ja:"Twitter",zh:"Twitter"},VKontakte:{en:"VKontakte",ru:"ВКонтакте",ko:"VKontakte",ja:"VKontakte",zh:"VKontakte"},"or simply":{en:"or simply",ru:"или просто",ko:"또는 단순히",ja:"それか単に",zh:"或者"},"Enter your e-mail here":{en:"Enter your e-mail here",ru:"Введите свой e-mail",ko:"여기에 e메일 주소를 입력하세요",ja:"ここにメールアドレスを入力",zh:"在这里输入你的电子邮件地址"},"Terms of service":{en:"Terms of use",ru:"Правила пользования",ko:"사용약관",ja:"利用規約",zh:"服务条款"},"Privacy policy":{en:"Privacy policy",ru:"Конфиденциальность",ko:"개인정보취급방침",ja:"プライバシーポリシー",zh:"隐私保护策略"},Jobs:{en:"Jobs",ru:"Вакансии",ko:"채용 정보",ja:"求人",zh:"工作机会"},"Contact us":{en:"Contact us",ru:"Напишите нам",ko:"연락처",ja:"問い合わせ",zh:"联系我们"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.profile_page={"Activity feed":{en:"Activity feed",ru:"Активность",ko:"활동",ja:"アクティビティデータ",zh:"活动订阅"},All:{en:"All",ru:"Все",ko:"전체",ja:"すべて",zh:"所有"},photos:{en:"photos",ru:"фото",ko:"포토",ja:"のフォト",zh:"照片"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.navbar={"My items":{en:"My items",ru:"Мои товары"},Profile:{en:"Profile",ru:"Профайл"},"Nothing yet":{en:"Nothing yet",ru:"Пока ничего"},"Log out":{en:"Log out",ru:"Выйти"},"Log In":{en:"Log In",ru:"Войти"}},qst=qst||{},qst.l10n=qst.l10n||{},qst.l10n.user_info={"Invite friends":{en:"Invite friends",ru:"Пригласить друзей",ko:"친구 초대하기",ja:"友人を招待",zh:"邀请的好友"},Remove:{en:"Remove",ru:"Удалить",ko:"지우기",ja:"削除",zh:"删除"},Follow:{en:"Follow",ru:"Подписаться",ko:"구독하기",ja:"フォロー",zh:"关注"},"Report user":{en:"Report user",ru:"Пожаловаться на пользователя",ko:"사용자 신고하기",ja:"ユーザーをレポートする",zh:"举报用户"},"Activity feed":{en:"Activity feed",ru:"Активность",ko:"활동",ja:"アクティビティデータ",zh:"活动订阅"},"Edit bio":{en:"Edit bio",ru:"Редактировать",ko:"바이오 수정하기",ja:"バイオを編集",zh:"编辑个人简介"},"Add bio":{en:"Add bio",ru:"Добавить био",ko:"바이오 추가하기",ja:"日記を追加",zh:"添加个人简介"},Message:{en:"Message",ru:"Сообщение",ko:"메세지",ja:"メッセージ",zh:"消息"},All:{en:"All",ru:"Все",ko:"전체",ja:"すべて",zh:"所有"},"Show photos":{en:"Show photos",ru:"Показать фото",ko:"사진 보이기",ja:"フォトを表示する",zh:"展示照片"},"Do you want to report this user?":{en:"Do you want to report this user?",ru:"Вы уверены, что хотите пожаловаться на пользователя?",ko:"이 사용자를 신고하길 원하세요?",ja:"このユーザーをレポートしますか？",zh:"你想举报此用户么？"},Report:{en:"Report",ru:"Да",ko:"신고하기",ja:"レポートする",zh:"举报"},Cancel:{en:"Cancel",ru:"Закрыть",ko:"취소",ja:"取り消し",zh:"取消"},"User reported.":{en:"User reported.",ru:"Вы пожаловались на пользователя.",ko:"사용자가 신고되었음.",ja:"レポートされたユーザー。",zh:"被举报的用户。"},"Something went wrong...":{en:"Something went wrong...",ru:"Что-то пошло не так...",ko:"잘 안되고 있습니다…",ja:"何かが間違っています・・・",zh:"出错了…"}};