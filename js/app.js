/***************** Model ***************/

var model = {
    currentCat: null,
    cats: [{
          name: 'cat_name1',
          src: 'img/kitten1_medium_size.jpg',
          alt: 'Kitten picture 1',
          clickCounter: 0
          // id: 'cat0'
        },
        {
          name: 'cat_name2',
          src: 'img/kitten2_medium_size.jpg',
          alt: 'Kitten picture 2',
          clickCounter: 0,
          // id: 'cat1'
        },
        {
          name: 'cat_name3',
          src: 'img/kitten3_medium_size.jpg',
          alt: 'Kitten picture 3',
          clickCounter: 0
          // id: 'cat2'
        },
        {
          name: 'cat_name4',
          src: 'img/kitten4_medium_size.jpg',
          alt: 'Kitten picture 4',
          clickCounter: 0
          // id: 'cat3'
        },
        {
          name: 'cat_name5',
          src: '',
          alt: 'Kitten picture 5',
          clickCounter: 0
          // id: 'cat4'
        }],
};

/********** Octopus **********/

var octopus = {
    init: function() {
        view.init(model.cats);
    },

    getCats: function() {
        return model.cats;
    },

    changeCurrent: function(index) {
        model.currentCat = model.cats[index];
        console.log(model.currentCat.clickCounter);
        view.render();
        console.log(model.currentCat.clickCounter);
    },

    getCurrentCat: function() {
        return model.currentCat;
    },

    incrementCounter: function() {
        model.currentCat.clickCounter++;
    }
};

/************** View ***************/

var view = {
    init: function(array) {
        for (var i = 0; i < array.length; i++){
            var $li = $('<li><a class="catLink" onclick="octopus.changeCurrent('+ i + ')"href="#">' + array[i].name + '</a></li>');
            $('ul').append($li);
        }

        // var $h3 = $('h3');
        // var $catImg = $('img');
        // var $h4 = $('h4');
        // var $clickCount = $('p');
    },

    render: function() {
        var currentCat = octopus.getCurrentCat();
        $('h3').html(currentCat.name);
        $('h3').removeAttr('hidden');
        $('img').attr({
                        src: currentCat.src,
                        alt: currentCat.alt,
                        // onclick: octopus.incrementCounter()
                    });
        $('img').click(octopus.incrementCounter());
        $('h4').removeAttr('hidden');
        $('p').html(currentCat.clickCounter);
        $('p').removeAttr('hidden');
    }
};

octopus.init();



