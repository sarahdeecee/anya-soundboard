const sampleData = [
  { english: 'So exciting...!',
    romaji: 'wakuwaku...!',
    japanese: 'ワクワク...!',
    episode: '1',
    file: '../../01-wakuwaku.mp3',
    picture: '../../01-wakuwaku.jpg'
  },
  { english: 'K!',
    romaji: 'ui',
    japanese: 'うい',
    episode: '1',
    file: '../../01-ui.mp3',
    picture: '../../01-ui.jpg'
  },
  { english: 'Bomby bomb, bomby bomb!',
    romaji: 'bakudan bakudan!',
    japanese: '爆弾、爆弾！',
    episode: '1',
    file: '../../01-bakudan.mp3',
    picture: '../../01-bakudan.jpg'
  },
  { english: 'Peanuts!',
    romaji: 'Peanuts!',
    japanese: 'ピーナッツ！',
    episode: '1',
    file: '../../01-peanuts.mp3',
    picture: '../../01-peanuts.jpg'
  },
  { english: 'I don\'t wanna!!',
    romaji: 'iyaaaadaaaa!!',
    japanese: 'いや〜だぁー！！',
    episode: '1',
    file: '../../01-yada.mp3',
    picture: '../../01-yada.jpg'
  },
  { english: 'Wah!',
    romaji: 'wah!',
    japanese: 'わっ！',
    episode: '1',
    file: '../../01-wah.mp3',
    picture: '../../01-wah.jpg'
  },
  { english: 'I\'m getting sold off!',
    romaji: 'Anya, uritobasareru!',
    japanese: 'アーニャ、売り飛ばされる〜！',
    episode: '2',
    file: '../../02-uri.mp3',
    picture: '../../02-uri.jpg'
  },
  { english: 'SO EXCITING!',
    romaji: 'WAKUWAKU',
    japanese: 'ワクワク！！',
    episode: '2',
    file: '../../02-wakuwaku.mp3',
    picture: '../../02-wakuwaku.jpg'
  },
  { english: 'Ah~',
    romaji: 'Ah~',
    japanese: 'あ〜',
    episode: '2',
    file: '../../02-aa.mp3',
    picture: '../../02-aa.jpg'
  },
  { english: 'Anya is lonely without a mother~',
    romaji: 'Anya, haha inakute samishii',
    japanese: 'アーニャ、母いなくて寂しい',
    episode: '2',
    file: '../../02-hahainakutesamishii.mp3',
    picture: '../../02-hahainakutesamishii.jpg'
  },
  { english: 'Anya longs for a mother~',
    romaji: 'Haha no sonzai koishii',
    japanese: '母の存在恋しい',
    episode: '2',
    file: '../../02-hahanosonzaikoishii.mp3',
    picture: '../../02-hahanosonzaikoishii.jpg'
  },
  { english: 'Stock on them peanuts!',
    romaji: 'peanuts kaikondoke!',
    japanese: 'ピーナッツ買い込んどけ！',
    episode: '2',
    file: '../../02-peanutskaikondoke.mp3',
    picture: '../../02-peanutskaikondoke.jpg'
  },
  { english: 'Gah!',
    romaji: 'GAN',
    japanese: 'ガーン！',
    episode: '3',
    file: '../../03-gan.mp3',
    picture: '../../03-gan.jpg'
  },
  { english: 'An ooting, an ooting, la la la la',
    romaji: 'odekeke odekeke ran ra ra ran',
    japanese: 'お出けけお出けけらんらららん',
    episode: '3',
    file: '../../03-odekeke.mp3',
    picture: '../../03-odekeke.jpg'
  },
  { english: 'She\'s all nakie!',
    romaji: 'supponpon supponpon!',
    japanese: 'スッポンポンスッポンポン！',
    episode: '3',
    file: '../../03-supponpon.mp3',
    picture: '../../03-supponpon.jpg'
  },
  { english: 'Head chopped! Body chopped!',
    romaji: 'kubi chonpa karada chonpa',
    japanese: '首チョンパ体チョンパ',
    episode: '3',
    file: '../../03-kubichonpa.mp3',
    picture: '../../03-kubichonpa.jpg'
  },
  { english: 'S\'all good, papa',
    romaji: 'donmai chichi',
    japanese: 'ドンマイ、父',
    episode: '3',
    file: '../../03-donmaichichi.mp3',
    picture: '../../03-donmaichichi.jpg'
  },
  { english: 'They\'re like tiny bits of trash...',
    romaji: 'hito ga gomi no you da...',
    japanese: '人がゴミのようだ…',
    episode: '3',
    file: '../../03-hitogagomi.mp3',
    picture: '../../03-hitogagomi.jpg'
  },
  { english: 'Baldy',
    romaji: 'hagechabe',
    japanese: 'ハゲちゃべ',
    episode: '4',
    file: '../../04-hagechabe.mp3',
    picture: '../../04-hagechabe.jpg'
  },
  { english: 'I really wanna pick my nose',
    romaji: 'anya, hanakuso hojiritai',
    japanese: 'アーニャ、鼻くそほじりたい',
    episode: '4',
    file: '../../04-hanakuso.mp3',
    picture: '../../04-hanakuso.jpg'
  },
  { english: 'It\'s okay, please',
    romaji: 'daijoubumasu',
    japanese: '大丈夫ます',
    episode: '4',
    file: '../../04-daijoubumasu.mp3',
    picture: '../../04-daijoubumasu.jpg'
  },
  { english: 'She\'s very nice.',
    romaji: 'tottemo yasashii desu',
    japanese: 'とっても優しいです',
    episode: '4',
    file: '../../04-yasashiidesu.mp3',
    picture: '../../04-yasashiidesu.jpg'
  },
  { english: 'But sometimes she\'s scary.',
    romaji: 'demo tama ni okkanai desu',
    japanese: 'でもたまにおっかいないです',
    episode: '4',
    file: '../../04-okkanaidesu.mp3',
    picture: '../../04-okkanaidesu.jpg'
  },
  { english: 'A perfect 100!',
    romaji: 'hyakuten manten desu!',
    japanese: '百点満点です！',
    episode: '4',
    file: '../../04-hyakutenmanten.mp3',
    picture: '../../04-hyakutenmanten.jpg'
  },
  // 3:05
  { english: 'Because I stepped in poop...!',
    romaji: 'anya ga unko funda kara',
    japanese: 'アーニャがウンコ踏んだから',
    episode: '5',
    file: '../../05-unko.mp3',
    picture: '../../05-unko.jpg'
  },
  // 5:40
  { english: 'Anya will pass...!',
    romaji: 'anya goukaku~ anya goukaku~',
    japanese: 'アーニャ合格〜　アーニャ合格〜',
    episode: '5',
    file: '../../05-goukaku.mp3',
    picture: '../../05-goukaku.jpg'
  },
  // 11:32
  { english: 'I\'m sad',
    romaji: 'anya, shonbori',
    japanese: 'アーニャしょんぼり',
    episode: '5',
    file: '../../05-shonbori.mp3',
    picture: '../../05-shonbori.jpg'
  },
  // 13:24
  // { english: 'Can be whatever',
  //   romaji: 'nandemo ii',
  //   japanese: '何でもいい',
  //   episode: '5',
  //   file: '../../05-nandemoii.mp3',
  //   picture: '../../05-nandemoii.jpg'
  // },
  // 16:08
  { english: 'I wanna see~',
    romaji: 'anya, mitai na~', 
    japanese: 'アーニャ、見たいなぁ〜',
    episode: '5',
    file: '../../05-mitaina.mp3',
    picture: '../../05-mitaina.jpg'
  },
  { english: 'I wanna see Loidman~',
    romaji: 'kanpeki na Loidman, mitai na~',
    japanese: '完璧なロイドマン、見たいなぁ〜',
    episode: '5',
    file: '../../05-kanpekinaloidman.mp3',
    picture: '../../05-kanpekinaloidman.jpg'
  },
  // 19:21
  { english: 'Save me, Loidman~',
    romaji: 'tasukete Loidma~n',
    japanese: '助けて、ロイドマ〜ン',
    episode: '5',
    file: '../../05-tasukete.mp3',
    picture: '../../05-tasukete.jpg'
  },
  // 2:13
  { english: 'Fank you very please',
    romaji: 'azazamasu',
    japanese: 'あざざます！',
    episode: '6',
    file: '../../06-azazamasu.mp3',
    picture: '../../06-azazamasu.jpg'
  },
  { english: 'Haba nice day',
    romaji: 'iterasai',
    japanese: 'いてらさい',
    episode: '6',
    file: '../../06-iterasai.mp3',
    picture: '../../06-iterasai.jpg'
  },
  { english: 'Am I cute?',
    romaji: 'anya kawaii?',
    japanese: 'アーニャかわいい？',
    episode: '6',
    file: '../../06-anyakawaii.mp3',
    picture: '../../06-anyakawaii.jpg'
  },
  { english: 'Do dodo do dodo do dodo',
    romaji: 'run run run run run run',
    japanese: 'るんるん るんるん るんるん',
    episode: '6',
    file: '../../06-runrun.mp3',
    picture: '../../06-runrun.jpg'
  },
  // { english: 'There, there',
  //   romaji: 'yoshiyoshi',
  //   japanese: 'よしよし',
  //   episode: '6',
  //   file: '../../06-yoshiyoshi.mp3',
  //   picture: '../../06-yoshiyoshi.jpg'
  // },
  // { english: 'Killer punch, kapow!',
  //   romaji: 'hissatsu panchi pokan!',
  //   japanese: '必殺パンチ　ポカーン！',
  //   episode: '6',
  //   file: '../../06-hissatsu.mp3',
  //   picture: '../../06-hissatsu.jpg'
  // },
  // { english: 'Hah!',
  //   romaji: 'sei!',
  //   japanese: 'せい！',
  //   episode: '6',
  //   file: '../../06-sei.mp3',
  //   picture: '../../06-sei.jpg'
  // },
  // 16:15
  { english: 'Okie dokie!',
    romaji: 'ookii dookii',
    japanese: 'オーキードーキー！',
    episode: '6',
    file: '../../06-okiedokie.mp3',
    picture: '../../06-okiedokie.jpg'
  },
  // 17:25 ninmu no tame Anya gaman
  // 18:18 heh
  // 20:13 Anya ga yatta shouko an no ka
  { english: 'You got any proof it was me?',
    romaji: 'anya ga yatta shouko an no ka',
    japanese: 'アーニャがやった証拠あんのか？',
    episode: '6',
    file: '../../06-shouko.mp3',
    picture: '../../06-shouko.jpg'
  },
  // 8:54 kami-sama...?
  { english: 'Is that you, God...?',
    romaji: 'kami-sama...?',
    japanese: '神様…？',
    episode: '7',
    file: '../../07-kamisama.mp3',
    picture: '../../07-kamisama.jpg'
  },
  // 9:04 nanka sugoi puressha kanjiru
  { english: 'I can feel an immense pressure...',
    romaji: 'nanka sugoi puressha kanjiru',
    japanese: 'なんかすごいプレッシャー感じる',
    episode: '7',
    file: '../../07-pressure.mp3',
    picture: '../../07-pressure.jpg'
  },
  // 12:19 gomennasai, anya tansoku de
  { english: 'I\'m sorry I have stubby legs...',
    romaji: 'gomennasai, anya tansoku de',
    japanese: 'ごめんなさい、アーニャ短足で',
    episode: '7',
    file: '../../07-tansoku.mp3',
    picture: '../../07-tansoku.jpg'
  },
  // 13:50 gakkou kowai... bekkii...
  { english: 'School is scary... Becky...',
    romaji: 'gakkou kowai... bekkii...',
    japanese: '学校怖い…ベッキー…',
    episode: '7',
    file: '../../07-gakkoukowai.mp3',
    picture: '../../07-gakkoukowai.jpg'
  },
  // 15:38 benkyou iya
  { english: 'I hate studying!!',
    romaji: 'benkyou iya',
    japanese: '勉強いやぁー！！',
    episode: '7',
    file: '../../07-benkyouiya.mp3',
    picture: '../../07-benkyouiya.jpg'
  },
  // 21:22 haha... chichi wo koroshite wa dame...
  { english: 'No, mama... you can\'t kill papa...',
    romaji: 'haha... chichi wo koroshite wa dame...',
    japanese: '母…父を殺してはダメ…',
    episode: '7',
    file: '../../07-koroshitewadame.mp3',
    picture: '../../07-koroshitewadame.jpg'
  },
  // 9:02
  { english: 'He has 2/8 of his bullets left!',
    romaji: 'zandansuu... hachibun no ni!',
    japanese: '残弾数…８分の２！',
    episode: '8',
    file: '../../08-zandansuu.mp3',
    picture: '../../08-zandansuu2.jpg'
  },
  // 9:32
  { english: 'Papa and mama are flirting',
    romaji: 'chichi to haha ichaicha',
    japanese: '父と母イチャイチャ',
    episode: '8',
    file: '../../08-ichaicha.mp3',
    picture: '../../08-ichaicha.jpg'
  },
  // 4:05
  { english: 'Is the world ending...?!',
    romaji: 'chikyuu no owari...?!',
    japanese: '地球の終わり…？！',
    episode: '9',
    file: '../../09-chikyuunoowari.mp3',
    picture: '../../09-chikyuunoowari.jpg'
  },
  // 8:33
  { english: 'Good mowning...',
    romaji: 'ohaemasu...',
    japanese: 'おはえます…',
    episode: '9',
    file: '../../09-ohaimasu.mp3',
    picture: '../../09-ohaimasu.jpg'
  },
  //8:36
  { english: 'Papa, you\'re looking green today',
    romaji: 'chichi kyou wa nandaka midoriiro',
    japanese: '父今日はなんだか緑色',
    episode: '9',
    file: '../../09-midoriiro.mp3',
    picture: '../../09-midoriiro.jpg'
  },
  // 9:26
  { english: 'It\'s kinda exciting!',
    romaji: 'nanka wakuwaku',
    japanese: 'なんかワクワク！',
    episode: '9',
    file: '../../09-nankawakuwaku.mp3',
    picture: '../../09-nankawakuwaku.jpg'
  },
  // { english: 'Return my excitement!',
  //   romaji: 'wakuwaku kaese!',
  //   japanese: 'ワクワク返せ！',
  //   episode: '9',
  //   file: '../../09-wakuwakukaese.mp3',
  //   picture: '../../09-wakuwakukaese.jpg'
  // },
  // 11:54
  { english: 'Papa and mama have to get along',
    romaji: 'chichi to haha, nakayokushinaito dame',
    japanese: '父と母、仲良くしないとダメ',
    episode: '9',
    file: '../../09-nakayokushinaito.mp3',
    picture: '../../09-nakayokushinaito.jpg'
  },
  // 22:14
  { english: 'Papa and mama are getting along!',
    romaji: 'chichi to haha, nakayoshi!',
    japanese: '父と母、仲良し！',
    episode: '9',
    file: '../../09-nakayoshi.mp3',
    picture: '../../09-nakayoshi.jpg'
  },
  // 22:04
  { english: 'Anya has arrived!',
    romaji: 'anya kikan shita!',
    japanese: 'アーニャ帰還した！',
    episode: '9',
    file: '../../09-kikan.mp3',
    picture: '../../09-kikan.jpg'
  },
  // 4:10
  { english: 'Shithead',
    romaji: 'kusoyarou',
    japanese: 'クソ野郎',
    episode: '10',
    file: '../../10-kusoyarou.mp3',
    picture: '../../10-kusoyarou.jpg'
  },
  // 5:49
  { english: 'Anya has retu~rned!',
    romaji: 'anya kika~n',
    japanese: 'アーニャきか〜ん',
    episode: '10',
    file: '../../10-anyakikan.mp3',
    picture: '../../10-anyakikan.jpg'
  },
  // 7:03
  { english: 'Star Catch Anya will do her best!',
    romaji: 'star catch anya, ganbaru!',
    japanese: 'スターキャッチアーニャ、がんばる！',
    episode: '10',
    file: '../../10-starcatchanyaganbaru.mp3',
    picture: '../../10-starcatchanyaganbaru.jpg'
  },
  // 19:25
  { english: 'You\'re actually a good guy?',
    romaji: 'omae ii yatsu?',
    japanese: 'お前いいやつ？',
    episode: '10',
    file: '../../10-omaeiiyatsu.mp3',
    picture: '../../10-omaeiiyatsu.jpg'
  },
  // 21:06
  { english: 'Finisher! Star Catch Arrow!',
    romaji: 'hissatsu! star catch arrow!',
    japanese: '必殺！スターキャッチアロー',
    episode: '10',
    file: '../../10-starcatcharrow.mp3',
    picture: '../../10-starcatcharrow.jpg'
  },
  // 21:23
  { english: 'Gya!',
    romaji: 'gyahi!',
    japanese: 'ギャヒ！',
    episode: '10',
    file: '../../10-gyahi.mp3',
    picture: '../../10-gyahi.jpg'
  },
  // // 1:59
  // { english: '',
  //   romaji: 'anya ima isogashii',
  //   japanese: '',
  //   episode: '11',
  //   file: '../../11-.mp3',
  //   picture: '../../11-.jpg'
  // },
  // // 5:12
  // { english: '',
  //   romaji: 'BWUAAAAAAAaaAuuu',
  //   japanese: '',
  //   episode: '11',
  //   file: '../../11-.mp3',
  //   picture: '../../11-.jpg'
  // },
  // // 6:02
  // { english: '',
  //   romaji: 'toriaezu kono na wa hodoke',
  //   japanese: '',
  //   episode: '11',
  //   file: '../../11-.mp3',
  //   picture: '../../11-.jpg'
  // },
  // // 
  // { english: '',
  //   romaji: 'odekeke?',
  //   japanese: '',
  //   episode: '11',
  //   file: '../../11-.mp3',
  //   picture: '../../11-.jpg'
  // },
  // // 8:18
  // { english: '',
  //   romaji: 'chichi... gomennasai',
  //   japanese: '',
  //   episode: '11',
  //   file: '../../11-.mp3',
  //   picture: '../../11-.jpg'
  // },
  // // 13:37
  // { english: '',
  //   romaji: 'ehe!',
  //   japanese: '',
  //   episode: '11',
  //   file: '../../11-.mp3',
  //   picture: '../../11-.jpg'
  // },
  // // 15:37
  // { english: '',
  //   romaji: 'starlight anya to yobe',
  //   japanese: '',
  //   episode: '11',
  //   file: '../../11-.mp3',
  //   picture: '../../11-.jpg'
  // },
  // // 18:59
  // { english: '',
  //   romaji: 'peanuts ichinenbun?',
  //   japanese: '',
  //   episode: '11',
  //   file: '../../11-.mp3',
  //   picture: '../../11-.jpg'
  // },
  // // 4:30
  // { english: '',
  //   romaji: 'osara katazuke!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 7:30
  // { english: '',
  //   romaji: 'anyanchi wa tottemo futsuu da to omoimasu',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 7:43
  // { english: '',
  //   romaji: 'matte! ii hito de futsuu no chichi!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 7:49
  // { english: '',
  //   romaji: 'gatan goton!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 9:11
  // { english: '',
  //   romaji: 'osaka..na!!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 10:43
  // { english: '',
  //   romaji: 'pepepepengin...!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 
  // { english: '',
  //   romaji: 'haha! yuukai sareru!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 16:36
  // { english: '',
  //   romaji: 'wao',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 17:09
  // { english: '',
  //   romaji: 'pengin!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 18:56
  // { english: '',
  //   romaji: 'yororosu onegai surumasu',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 20:55
  // { english: '',
  //   romaji: 'kokoro shite kakare',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 21:31
  // { english: '',
  //   romaji: 'chichi mo haha mo kirai! anya iede suru!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 22:05
  // { english: '',
  //   romaji: 'yoshi, tsutekoi omaera',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
  // // 22:10
  // { english: '',
  //   romaji: 'tasuke ni ikuzo!',
  //   japanese: '',
  //   episode: '12',
  //   file: '../../12-.mp3',
  //   picture: '../../12-.jpg'
  // },
];

export default sampleData;