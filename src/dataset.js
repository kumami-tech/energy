const defaultDataset = {
  "init": {
      answers: [
          {content: "モチベーションを上げたい", nextId: "motivation"},
          {content: "癒やされたい", nextId: "healing"},
          {content: "テンションを上げたい", nextId: "exciting"},
          {content: "体を動かしたい", nextId: "exercise"},
          {content: "人生に疲れた", nextId: "tired"},
      ],
      question: "こんにちは！\nあなたは今、どんな気分ですか？",
  },

  // =====モチベーションを上げたい=====

  "motivation": {
      answers: [
          {content: "勉強", nextId: "study"},
          {content: "部活", nextId: "club"},
          {content: "仕事", nextId: "job"},
          {content: "その他", nextId: "other"}
      ],
      question: "何のモチベーションを上げたいですか？",
  },

  "study": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=NsRTpBaH-UE&t=112s"},
          {content: "一つ前の質問に戻る", nextId: "motivation"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "勉強のモチベーションを上げたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },

  "club": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=SMEdsVFMtwo&list=PLRPDHP2MKpnaxE06yrLonLib_G4aGy7jq&index=2"},
          {content: "一つ前の質問に戻る", nextId: "motivation"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "部活のモチベーションを上げたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },

  "job": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=B6jd3YVDo0I"},
          {content: "一つ前の質問に戻る", nextId: "motivation"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "仕事のモチベーションを上げたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },

  "other": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=mJJqbkvtPMM&list=PLRPDHP2MKpnaxE06yrLonLib_G4aGy7jq&index=5&t=38s"},
          {content: "一つ前の質問に戻る", nextId: "motivation"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "モチベーションを上げたいあなたには、こちらの動画がおすすめです。",
  },

  // =====癒やされたい=====

  "healing": {
      answers: [
          {content: "動物に癒やされたい", nextId: "animal"},
          {content: "自然に癒やされたい", nextId: "nature"},
          {content: "音楽に癒やされたい", nextId: "music"}
      ],
      question: "何に癒やされたいですか？",
  },
  
  "animal": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=2MqjzMeD3Uo"},
          {content: "一つ前の質問に戻る", nextId: "healing"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "動物に癒やされたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },
  
  "nature": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=LPOX6Qu3IiQ&t=410s"},
          {content: "一つ前の質問に戻る", nextId: "healing"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "自然に癒やされたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },
  
  "music": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=wn_dhNE1KTY"}
          {content: "一つ前の質問に戻る", nextId: "healing"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "音楽に癒やされたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },

  // =====テンションを上げたい=====

  "exciting": {
      answers: [
          {content: "笑いたい", nextId: "laugh"},
          {content: "ノリノリになりたい", nextId: "high"},
      ],
      question: "どんな風にテンションを上げたいですか？",
  },

  "laugh": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=GoLpSJ8Bfpc&list=PLRPDHP2MKpnaxE06yrLonLib_G4aGy7jq&index=10&t=12s"},
          {content: "一つ前の質問に戻る", nextId: "exciting"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "笑いたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },

  "high": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=sr--GVIoluU"},
          {content: "一つ前の質問に戻る", nextId: "exciting"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "ノリノリになりたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },

  // =====体を動かしたい=====

  "exercise": {
      answers: [
          {content: "楽しく動かしたい", nextId: "fun"},
          {content: "ガッツリ動かしたい", nextId: "hard"}
      ],
      question: "体をどんな風に動かしたいですか？",
  },

  "fun": {
      answers: [
        {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=8T5DqYGHD6g"},
        {content: "一つ前の質問に戻る", nextId: "exercise"}
        {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "体を楽しく動かしたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },

  "hard": {
      answers: [
        {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=UZJOLmMDqu8"},
        {content: "一つ前の質問に戻る", nextId: "exercise"}
        {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "体をガッツリ動かしたいとのことですね。\nそんなあなたには、こちらの動画がおすすめです。",
  },

  // =====人生に疲れた=====

  "tired": {
      answers: [
          {content: "動画を見る", nextId: "https://www.youtube.com/watch?v=WBcYYC9mEBc"},
          {content: "一つ前の質問に戻る", nextId: "tired"}
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "人生に疲れたとのことですね。お疲れ様です。\nそんなあなたには、こちらの動画がおすすめです。",
  },
}

export default defaultDataset