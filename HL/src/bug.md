1.  产品：AirCityExplorer
2.  版本：2021.0323
3.  api 接口：\_\_g.tag
4.  代码：

        //标签1
        let id1 = 'case1';     //标签的ID，字符串值，也可以用数字（内部会自动转成字符串）
        let coord1 = [510396.75, 2494978.5, 110.00007629394531];  //坐标值：标签添加的位置
        let imagePath1 = "https://z3.ax1x.com/2021/04/08/cYFn6e.png"; //图片路径，可以是本地路径，也支持网络路径
        let url1 = '';   //鼠标点击标签后弹出的网页的URL，也可以是本地视频文件，鼠标点击标签后会弹出视频播放窗口
        let imageSize1 = [200, 200];           //图片的尺寸
        let text1 = '';              //标签显示的文字
        let range1 = [1, 8000.0];            //标签的可见范围
        let showLine1 = true;                //标签下方是否显示垂直牵引线

        let o1 = new TagData(id1, coord1, imagePath1, imageSize1, url1, text1, range1, showLine1);
        o1.textColor = Color.Black;         //设置文字颜色
        o1.textBackgroundColor = Color.White;

        __g.tag.add(o1);

    重复添加 10 次左右（变量名是有修改的，不重复）

5.  报错界面

    [![cD07Y6.md.png](https://z3.ax1x.com/2021/04/12/cD07Y6.md.png)](https://imgtu.com/i/cD07Y6)

<!-- x 496080.90625 y 2481401.75
E:\AirCityExplorer2021.0323_Release4.2\AirCityExplorer\Binaries\Win64\AirCityExplorer.exe -projectpath=E:\DATAPATH\红岭\newProject\HL1.31.acp -websocketport=4322 -webui=http://localhost:8080 -->
