const AV = require('../../utils/av-weapp.js');

Page({
  data: {

  },
  goToTopic:function(e){
    console.log(e.currentTarget.id);
  },
  onLoad: function () {
    var paramsData={
      "userid":""
    };
    AV.Cloud.run('getMyQuestion',paramsData).then(function(res){
      console.log(res);
    },function(err){
      console.error(err);
    })
  }
})
