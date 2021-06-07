class Slider{

    constructor(id){
        //获取id的节点，以及以下的各个节点 
        this.box=document.querySelector(id);
        this.picbox=this.box.querySelector("ul");
        this.indexbox=this.box.querySelector(".index-box");
        





        // 初始化
        this.init()
    }

    init(){
        console.log("slider");

        this.initpoint();

    }
    // 初始化小圆点
    initpoint(){
    // 获取几张图片，就相当于就有几个小圆点
        const num=this.picbox.children.length;

        let frg=document.createDocumentFragment();
        for(let i=0; i<num; i++){
            let li=document.createElement("li");
        //  在html中添加一个自定义属性 data-index
            li.setAttribute("data-index",i+1);
            // 若某图为第一张时，添加class="active"的变红css
            if(i==0) li.className="active";
            // 插入
            frg.appendChild(li);
        }
        
        this.indexbox.children[0].style.width=num*10*2+"px";
        this.indexbox.children[0].appendChild(frg);

    }

}