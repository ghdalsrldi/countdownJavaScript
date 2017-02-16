/**
 * Created by mkhong on 2017-02-16.
 */
var Countdown = function(){
    this.numImg = [];
};

Countdown.prototype = {
    setTime : function(dateSting) {
        this.endTime = new Date(dateSting);
    },
    getCountDown : function(){
        var currentTime = new Date();
        var timeGap = this.endTime.getTime() - currentTime.getTime();
        var resultTime = new Date(timeGap);

        var result = {
            s : resultTime.getSeconds(),
            m : resultTime.getMinutes(),
            h : resultTime.getHours()
        };
        result['h'] += (resultTime.getDate() - 1) * 24;

        return result;
    },
    convertDateFormat : function(dateObj) {
        dateObj['s'] = dateObj['s'].toString().length < 2 ? '0' + dateObj['s'].toString() : dateObj['s'].toString();
        dateObj['m'] = dateObj['m'].toString().length < 2 ? '0' + dateObj['m'].toString() : dateObj['m'].toString();
        dateObj['h'] = dateObj['h'].toString().length < 2 ? '0' + dateObj['h'].toString() : dateObj['h'].toString();
        return dateObj;
    },
    printTimeText : function (text_element) {
        var countdown = this.convertDateFormat(this.getCountDown());
        text_element.innerHTML = countdown['h'] + ":" + countdown['m'] + ':' + countdown['s'] ;
    },
    printTimeImg : function (img_element_dic) {
        var countdown = this.convertDateFormat(this.getCountDown());
        if (img_element_dic['h1'].src !=  this.getNumImg(countdown['h'][0])) {
            img_element_dic['h1'].src= this.getNumImg(countdown['h'][0]);
        }
        if (img_element_dic['h2'].src !=  this.getNumImg(countdown['h'][1])) {
            img_element_dic['h2'].src= this.getNumImg(countdown['h'][1]);
        }

        if (img_element_dic['m1'].src !=  this.getNumImg(countdown['m'][0])) {
            img_element_dic['m1'].src= this.getNumImg(countdown['m'][0]);
        }
        if (img_element_dic['m2'].src !=  this.getNumImg(countdown['m'][1])) {
            img_element_dic['m2'].src= this.getNumImg(countdown['m'][1]);
        }

        if (img_element_dic['s1'].src !=  this.getNumImg(countdown['s'][0])) {
            img_element_dic['s1'].src= this.getNumImg(countdown['s'][0]);
        }
        if (img_element_dic['s2'].src !=  this.getNumImg(countdown['s'][1])) {
            img_element_dic['s2'].src= this.getNumImg(countdown['s'][1]);
        }
    },
    setNumImg : function(num, path) {
        this.numImg[num] = path;
    },
    getNumImg : function(num) {
        return this.numImg[num];
    }
};
