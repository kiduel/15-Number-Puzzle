
var app = function() {

    var self = {};
    self.is_configured = false;

    Vue.config.silent = false; // show all warnings

    // Extends an array
    self.extend = function(a, b) {
        for (var i = 0; i < b.length; i++) {
            a.push(b[i]);
        }
    };

    // Enumerates an array.
    var enumerate = function(v) {
        var k=0;
        v.map(function(e) {e._idx = k++;});
    };

    // Initializes an attribute of an array of objects.
    var set_array_attribute = function (v, attr, x) {
        v.map(function (e) {e[attr] = x;});
    };

    self.initialize = function () {
        document.addEventListener('deviceready', self.ondeviceready, false);
        initDeck(); 
    };

    // START OF GAME LOGIC

    
    var blankPos,lis,moves;


    var initDeck = function(){
        moves = 0;
        blankPos = 15;
        lis = document.getElementById("puzzle").getElementsByTagName("li");
        for(i=0;i<lis.length;i++){
            lis[i].value = i;    
            if(i==0||i==2||i==5||i==7||i==8||i==10||i==13||i==15){
                lis[i].className = "puzzleButton buttonOdd";
                lis[i].innerHTML = i + 1;
                lis[i].addEventListener('click', boxClick, false);
            }else{
                lis[i].className = "puzzleButton buttonEven";
                lis[i].innerHTML = i + 1;
                lis[i].addEventListener('click', boxClick, false);
            }
            lis[i].style.visibility = "visible";            
        }
        lis[blankPos].style.visibility = "hidden";
        document.getElementById('initBtn').addEventListener('click', initDeck, false);
        document.getElementById('scramBtn').addEventListener('click', scramble, false);
    }

    var boxClick = function(e){
        if(e.target.value - 1 == blankPos || e.target.value + 1 == blankPos || e.target.value - 4 == blankPos || e.target.value + 4 == blankPos){
            
            lis[blankPos].innerHTML = lis[e.target.value].innerHTML;
            lis[e.target.value].innerHTML = 16;

            var swap = lis[e.target.value].className;
            lis[e.target.value].className = lis[blankPos].className;
            
            lis[blankPos].className = swap;
            lis[blankPos].style.visibility = "visible";
            blankPos = e.target.value;
            
            lis[blankPos].style.visibility = "hidden";
            moves++;
            checkWin();
        }
    }

    var scramble = function(){
        var arr = randomArray();

        console.log(arr);

        moves = 0;
        
        lis = document.getElementById("puzzle").getElementsByTagName("li");
        for(i=0;i<lis.length;i++){
            var j= arr[i]-1;
            lis[i].value = i;    

            if(j==0||j==2||j==5||j==7||j==8||j==10||j==13||j==15){
                lis[i].className = "puzzleButton buttonOdd";
                lis[i].innerHTML = arr[i];
            }else{
                lis[i].className = "puzzleButton buttonEven";
                lis[i].innerHTML = arr[i];               
            }
            lis[i].addEventListener('click', boxClick, false);
            lis[i].style.visibility = "visible";

            if(arr[i] == 16){
                blankPos = i;
            }  
        
        }
        lis[blankPos].style.visibility = "hidden";   

        for(x=0;x<lis.length;x++){
            console.log(lis[x].value,lis[x].innerHTML);
        }
        console.log(blankPos);    
    }

    var randomArray = function(){
        var arr = [];
        for (var i = 0, l = 16;; i++) {

            var x = Math.round(Math.random() * l);
            var hasNotGot = true;
        
            for(var j=0;j<arr.length;j++){
                if(arr[j]==x || x==0){
                        hasNotGot = false;
                }
            }
            
            if(hasNotGot){
                arr.push(x);
                if(arr.length == 16){
                    break;
                }
            }
        }
        return arr;
    } 

    var checkWin = function(){
        var gotIssue = false;
        for(i=0;i<lis.length;i++){
            if(lis[i].value + 1!=lis[i].innerHTML){
                    gotIssue = true;
                    break;
            }
        }
        if(!gotIssue){
            alert("Hurray. You have solved in " + moves + " moves");
        }

    };

    // END OF GAME LOGIC


    self.ondeviceready = function () {
        // This callback is called once Cordova has finished its own initialization.
        console.log("The device is ready");
        $("#vue-div").show();
        self.is_configured = true;
    };

    self.vue = new Vue({
        el: "#vue-div",
        delimiters: ['${', '}'],
        unsafeDelimiters: ['!{', '}'],
        data: {
        },
        methods: {
        }

    });

    return self;
};

var APP = null;

// This will make everything accessible from the js console;
// for instance, self.x above would be accessible as APP.x
jQuery(function(){
    APP = app();
    APP.initialize();
});
