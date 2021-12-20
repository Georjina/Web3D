export const listMixin = {
  data(){
    return {
      searchData : {
        search   : '',
        page     : 1,
        pageSize : '10',
      },
      total      : 400,
      /**/
      fileList : [],
      /**/
      isEdit          : false,
      selectList      : [],
      selectAllStatus : false,
    };
  },
  created : function(){
  },
  methods : {
    selectAll(){
      this.selectAllStatus = !this.selectAllStatus;
      this.modelData.map((item) => {
        if (this.selectAllStatus && !item.delete) {
          this.selectList.push(item.id);
          item.delete = true;
        } else if (!this.selectAllStatus && item.delete) {
          let currentObj = this.selectList.findIndex(obj => obj == item.id);
          this.selectList.splice(currentObj, 1);
          item.delete = false;
        }
      });
    },
    emptyAll(){
      this.selectList = [];
      this.modelData = this.modelData.map((item) => {
        item.delete = false;
        return item;
      });
    },
  },
}
