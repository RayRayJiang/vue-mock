<template>
    <div class="moduleitem">
        <div class="moduleheader">
            <div class="title">
                <span :class="icon"></span>
                <span class="titlename">{{titleName}}</span>
            </div>
            <div class="more">
                <span class="titlemore">更多精彩</span>
                <span class="iconfont icon-gengduo"></span>
            </div>
        </div>
        <div class="modulelist">
            <div class="listitem" v-for="(item, index) in listItem" :key="index">
                <img src="../assets/images/1900.jpg" alt="">
                <div class="name">{{item.name}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Homemodule',
        props: ['listItem', 'titleName', 'icon']
    }
</script>

<style lang="scss" scoped>
    .moduleitem {
        background-color: #e7e7e7;
        padding-top: 0.3rem;
        .moduleheader {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fafafa;
            padding: 0.2rem 0.25rem;
            .title {
                span {
                    font-size: 0.27rem;
                }
                span:nth-child(1) {
                    color: #f57272;
                }
                .titlename {
                    display: inline-block;
                    padding-left: 0.1rem;
                }
            }
            .more {
                span {
                    font-size: 0.27rem;
                }
                .titlemore {
                    display: inline-block;
                    padding-right: 0.1rem;
                }
            }
        }
        .modulelist {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            align-items: center;
            padding: 0 0.2rem 0.2rem;
            .listitem {
                background-color: #fff;
                margin-top: 0.25rem;
                box-shadow: 0.1rem 0.1rem 0.1rem #999;
                img {
                    width: 2.15rem;
                    height: 2.7rem;
                    object-fit: cover;
                }
                .name {
                    width: 1.5rem;
                    margin: auto;
                    color: #5c5c5c;
                    padding: 0.2rem;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
        }
    }
</style>