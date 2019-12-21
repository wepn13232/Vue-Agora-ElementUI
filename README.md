# YOLO社区毕业设计文档

###大致内容
* ####首页
    * 展示推荐图片（数据库固定存储图片url）
    * 展示推荐文章（文章信息表中获取，随机展示4篇）-- 查看更多跳转至“更多文章页”
    * 展示推荐人物（用户信息表中获取，随机展示4位）

* ####登录页

* ####注册页    

* ####直播大厅
    * 展示推荐主播（直播用户表获取，随机展示6个）
    * 展示其他主播（直播用户表获取，展示全部）
    * ==推荐主播和其他主播可能会有重复，因两个区域互不干扰==

* ####直播间
    * 显示直播（分观众和主播）
    * 聊天（自己发送的文字会作重点处理）
    * 弹幕
    * 展示直播间简介（从直播间表获取）
    * 展示直播间标题（从直播间表获取）
    * 展示主播名、主播简介（从直播间表获取、从用户信息表获取）

* ####文章推荐页
    * 展示推荐文章（随机获取3篇，从文章信息表获取）
    * 展示剩余文章（从文章信息表获取）
    * ==可能推荐文章和剩余文章会有重复，但是两个板块互不影响==    

* ####文章详情页
    * 展示发布日期（文章信息表获取）
    * 展示标题（文章信息表获取）
    * 展示作者（文章信息表获取）
    * 展示内容（文章信息表获取）

* ####个人中心页
    * 展示用户信息（用户信息表获取）
    * 授权码查看（仅限本人用户查看，无法查看其他用户授权码）
    * 可编辑个人信息

* ####个人中心页-编辑
    * 除性别外，其余都可编辑

* ####空间页 
    * 展示具体用户的动态数据

* ####申请授权码页
    * 步骤申请

* ####管理员页
    * 数据展示（从文章信息表、用户信息表获取）
    * 文章管理（从文章信息表获取）
    * 直播管理（从直播用户表获取） 

    
-------


###数据表

* ####用户信息表
    * id
    * 用户名（username）
    * 昵称（name）
    * 密码（password）
    * 邮箱（email）
    * 性别（sex）
    * 地区（address）
    * 授权码（appid）
    * 简介（userSum）
    * 直播状态（liveStatus）// 0为可直播，1为被封禁

* ####文章信息表
    * id
    * 标题（title）
    * 用户名（username）
    * 发布用户（name）
    * 封面地址（url）
    * 发布日期（date）
    * 文章类型（essayType）
    * 内容 （content）

* ####主播表
    * id
    * 用户名（username）
    * 昵称（name）（可从用户表获取）
    * 授权码（appid）

* ####直播间信息表
    * id
    * 用户名（username）
    * 用户昵称（name）
    * 标题（title）
    * 直播间简介（sum）

* ####空间动态表
    * id
    * 用户名（username）
    * 用户昵称（name）
    * 动态时间（date）
    * 动态内容（content）
    
* ####打分表
    * 用户名（username）
    * 昵称 （name）
    * 分数（数组形式）（score）
    
-------
    
    
 ###所需接口

    * ---获取用户信息接口---（getUserInfo）
            ①登录时传用户名、密码查询
            ②传用户名查询该用户信息
            ③不传时获取所有用户
            
            
    * ---登录接口---（login）
            ①获取用户名（username）和密码（password）进行对比，返回正确的用户数据
            
            
    * ---获取文章信息接口---（getEssayInfo）
            ①不传时获取全部文章信息
            ②传文章名字获取该文章信息
            ③传文章id获取具体文章信息
            
            
    * ---插入用户信息接口---（setUserInfo）
            ①传“注册”时的字段，插入数据库表
            
            
    * ---插入直播间信息接口---（setLiveRoomInfo）
            ①插入用户名、房间标题、房间简介
            
            
    * ---插入主播信息接口---（setHostInfo）
            ①插入用户名、appid、用户昵称
            
            
    * ---插入文章信息接口---（setEssayInfo）
            ①插入文章封面、文章类型、文章标题、文章内容
            
            
    * ---修改用户信息接口---（modifyUserInfo）
            ①更新 用户简介、appid、地区、邮箱
            
            
    * ---获取用户信息-地区人数---（getAddressNum）
            ①获取不同地区不同人数
      
      
    * ---获取文章信息-分类总数---（getEssayTypeNum）
                 ①获取不同文章类型的数量
           
            
    * ---获取用户信息-性别人数---（getSexNum）
            ①获取数据库用户信息表男女人数
                        
            
    * ---删除文章---（deleteEssay）
          根据文章id删除
          
    * ---封禁主播---（banHost）
            将“用户信息表”具体用户的直播状态（liveStatus）改为1
            
            
    * ---插入appid至用户信息表---（setAppid）
            根据用户名（username）和输入的appid插入用户信息表
    
    * ---获取动态信息接口---（getInfo）
            ①传用户名查询具体的用户（全部）动态信息
    




