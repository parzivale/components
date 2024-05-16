Talk.ready.then(function () {
    const urlParams = new URLSearchParams(window.location.search);
    const me = new Talk.User({
        email: urlParams.get("user_email"),
        id: urlParams.get("user_id"),
        phone: urlParams.get("user_phone"),
        photoUrl: urlParams.get("user_photo"),
    });


    const session = Talk.oneOnOneId(me, {id: urlParams.get("bot_id")});
    const talkSession = new Talk.Session({
      appId: 'tSmc5UqI',
      me: me,
    });

    const conversation = talkSession.getOrCreateConversation(
        talkSession
    );
    conversation.setParticipant(me);

    const chatbox = talkSession.createChatbox();
    chatbox.select(conversation);
    chatbox.mount(document.getElementById('talkjs-container'));
  });