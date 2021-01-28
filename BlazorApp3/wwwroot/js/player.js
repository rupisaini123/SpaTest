function loadPlayer(id, options) {
    var player = videojs(id, options);
    var titleOptions = {
        title: 'Akbar ka bal Birbal',
        floatPosition: 'left', //Float left or right (to prevent big play button overlap) (default left)
            margin: '10px', //Margin from top/left/right (default 10px)
                fontSize: '2em', //font size (default 1em)
                    debug: false //true or false. Will output debug messages for title status
    //logger: LOGOBJECT //must have a function called log that it can call to, otherwise will use a default basic log func
            };
    player.titleoverlay(titleOptions);
     player.seekButtons({
         forward: 10,
         back: 10
     });

}