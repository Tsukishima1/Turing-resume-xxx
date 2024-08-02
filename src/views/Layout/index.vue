<script setup>

</script>

<template>
    <div class="Layout">
        <div class="resHeader"></div>
        <div class="resContent">
            <div class="baseInfo">
                <div class="row">
                    <div class="year">
                    <p>入学年份</p>
                    <input type="text">
                </div>
                <div class="major">
                    <p>专业</p>
                    <input type="text">
                </div>
                </div>
                <div class="row">
                    <div class="name">
                    <p>姓名</p>
                    <input type="text">
                </div>
                <div class="sex">
                    <p>性别</p>
                    <i>男</i><input type="checkbox" name="sex" value="male">
                    <i>女</i><input type="checkbox" name="sex" value="female">
                </div>
                </div>
            </div>
            <div class="direction">
                <div class="box">
                    <i>前端</i>
                </div>
                <div class="box">
                    <i>后端</i>
                </div>
                <div class="box">
                    <i>UI</i>
                </div>
                <div class="box">
                    <i>CV</i>
                </div>
                <div class="box">
                    <i>nlp</i>
                </div>
            </div>
            <div class="relative">
                <div class="merit">
                    <p>你的优点</p>
                    <textarea name="" id=""></textarea>
                </div>
                <div class="demerit">
                    <p>你的缺点</p>
                    <textarea name="" id=""></textarea>
                </div>
            </div>
            <div class="experience">
                <p>项目经历</p>
                <textarea name="experience" id="experience"></textarea>
            </div>
            <div class="goal">
                <p>未来展望</p>
                <textarea name="goal" id="goal"></textarea>
            </div>
            <button>提交</button>
        </div>
        <div class="resFooter"></div>
    </div>
</template>


<style lang="scss" scoped>
    .Layout{
        margin: 0 auto;
        .resContent{
            border: 1px solid brown;
            display: flex;
            flex-direction: column;
            .baseInfo{
                margin: auto;
                display: flex;
                .row{
                    .year{
                    display: flex;
                    }
                    .major{
                    display: flex;
                    }
                    .name{
                        display: flex;
                    }
                    .sex{
                        display: flex;
                    }
                    p{
                        margin: 20px;
                    }
                    i{
                        margin: 20px 5px;
                    }
                }
                
            }
            .direction{
                margin: auto;
                display: flex;
                justify-content: space-evenly;
                .box{
                    width: 120px;
                    height: 195px;
                    background: #000;
                    margin: 20px;
                    border-radius: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    i{
                        font-size: 30px;
                        font-weight: 600;
                        color: #fff;
                    }
                }
                .box:nth-child(1){
                    background: rgb(34,193,195);
                    background: linear-gradient(313deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 80%);
                }
                .box:nth-child(2){
                    background: rgb(63,94,251);
                    background: linear-gradient(313deg, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%);
                }
                .box:nth-child(3){
                    background: rgb(113,180,58);
                    background: linear-gradient(313deg, rgba(113,180,58,1) 0%, rgba(235,100,100,0.2769900196406687) 0%, rgba(252,69,222,0.4982785350468313) 100%);
                }
                .box:nth-child(4){
                    background: rgb(5,36,0);
                    background: linear-gradient(313deg, rgba(5,36,0,1) 0%, rgba(9,14,121,1) 0%, rgba(0,255,198,1) 100%);
                }
                .box:nth-child(5){
                    background: rgb(113,180,58);
                    background: linear-gradient(313deg, rgba(113,180,58,1) 0%, rgba(235,193,100,0.8904353977919293) 0%, rgba(252,85,69,0.9044410000328256) 100%);
                }
            }
            .relative{
                margin: auto;
            }
            .experience{
                margin: auto;
            }
            .goal{
                margin: auto;
            }
            button{
                width: 100px;
                border-radius: 15px;
                margin: auto;
                background-image: linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%);
                padding: 15px 30px;
                text-align: center;
                text-transform: uppercase;
                transition: 0.5s;
                background-size: 200% auto;
                color: white;
                border-radius: 10px;
                display: block;
                border: 0px;
                font-weight: 700;
                box-shadow: 0px 0px 14px -7px #f09819;
            }

        }
    }
</style>