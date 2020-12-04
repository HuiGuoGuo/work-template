<template>
    <el-container>
        <el-col :span="1"/>
        <el-col :span="14" style="padding-top: 20px">
            <el-button type="primary" @click="addWeekly(form.currWeeks)">本周工作新增</el-button>
            <el-button type="success" @click="addWeekly(form.nextWeeks)">下周工作新增</el-button>
            <el-form ref="form" :model="form" label-width="90px" style="padding-top: 10px">
                <el-form-item v-for="(curr,index) in form.currWeeks" :label="'本周工作 ' + (index+1)" :key="curr.key">
                    <el-col :span="4">
                        <el-form-item>
                            <el-select v-model="curr.project" placeholder="请选择" style="width: 100%;">
                                <el-option
                                        v-for="item in projects"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="">
                            <el-input type="text" v-model="curr.currWeek"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item>
                            <el-select v-model="curr.percent" placeholder="完成度" style="width: 100%;">
                                <el-option
                                        v-for="item in percents"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item>
                            <el-select v-model="curr.behavior" placeholder="行为" style="width: 100%;">
                                <el-option
                                        v-for="item in behaviors"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item>
                            <el-date-picker type="date" placeholder="日期" v-model="curr.behaviorDate"
                                            style="width: 100%;" format="MM-dd"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="1">
                        <el-button type="danger" icon="el-icon-delete"
                                   @click="removeWeekly(curr,form.currWeeks)"></el-button>
                    </el-col>
                </el-form-item>
                <el-divider></el-divider>

                <el-form-item v-for="(curr,index) in form.nextWeeks" :label="'下周工作 ' + (index+1)" :key="curr.key">
                    <el-col :span="4">
                        <el-form-item>
                            <el-select v-model="curr.project" placeholder="请选择" style="width: 100%;">
                                <el-option
                                        v-for="item in projects"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="10">
                        <el-form-item label="">
                            <el-input type="text" v-model="curr.currWeek"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item>
                            <el-select v-model="curr.percent" placeholder="完成度" style="width: 100%;">
                                <el-option
                                        v-for="item in percents"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item>
                            <el-select v-model="curr.behavior" placeholder="请选择" style="width: 100%;">
                                <el-option
                                        v-for="item in behaviors"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                        :disabled="item.disabled">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item>
                            <el-date-picker type="date" placeholder="日期" v-model="curr.behaviorDate"
                                            style="width: 100%;" format="MM-dd"></el-date-picker>
                        </el-form-item>
                    </el-col>
                    <el-col :span="1">
                        <el-button type="danger" icon="el-icon-delete"
                                   @click="removeWeekly(curr,form.nextWeeks)"></el-button>
                    </el-col>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="2"/>
        <el-col :span="6">
            <el-input
                    type="textarea"
                    :rows="30"
                    placeholder="请输入内容"
                    :readonly="true"
                    v-model="result"
            >
            </el-input>

        </el-col>
    </el-container>
</template>
<script>
    export default {
        name: "Weekly",
        data() {
            return {
                projects: [
                    {
                        label: '供应链与B2B',
                        value: '供应链与B2B'
                    },
                    {
                        label: '农业',
                        value: '农业'
                    },
                    {
                        label: '消费',
                        value: '消费'
                    },
                    {
                        label: 'Alchemist',
                        value: 'Alchemist'
                    },
                    {
                        label: '配置中心',
                        value: '配置中心'
                    },
                    {
                        label: 'Portal',
                        value: 'Portal'
                    },
                    {
                        label: '审批',
                        value: '审批'
                    },
                    {
                        label: '数据资源与征信',
                        value: '数据资源与征信'
                    },
                    {
                        label: '电签',
                        value: '电签'
                    },
                    {
                        label: '区块链',
                        value: '区块链'
                    },
                    {
                        label: '虚拟账户与聚合支付',
                        value: '虚拟账户与聚合支付'
                    },
                    {
                        label: '技术输出：进件系统',
                        value: '技术输出：进件系统'
                    },
                    {
                        label: '客服机器人',
                        value: '客服机器人'
                    },
                    {
                        label: '质量管理',
                        value: '质量管理'
                    },
                    {
                        label: '数据库运维',
                        value: '数据库运维'
                    },
                    {
                        label: '系统运维',
                        value: '系统运维'
                    },
                    {
                        label: '信息安全',
                        value: '信息安全'
                    },
                    {
                        label: '知识产权',
                        value: '知识产权'
                    }
                ],
                percents: [{
                    label: '10%',
                    value: '10%'
                },
                    {
                        label: '20%',
                        value: '20%'
                    },
                    {
                        label: '30%',
                        value: '30%'
                    },
                    {
                        label: '40%',
                        value: '40%'
                    },
                    {
                        label: '50%',
                        value: '50%'
                    },
                    {
                        label: '60%',
                        value: '60%'
                    },
                    {
                        label: '70%',
                        value: '70%'
                    },
                    {
                        label: '80%',
                        value: '80%'
                    },
                    {
                        label: '90%',
                        value: '90%'
                    },
                    {
                        label: '100%',
                        value: '100%'
                    },],
                behaviors: [
                    {
                        label: '提测',
                        value: '提测'
                    },
                    {
                        label: '预计提测',
                        value: '预计提测'
                    },
                    {
                        label: '上线',
                        value: '上线'
                    },
                    {
                        label: '预计上线',
                        value: '预计上线'
                    },
                    {
                        label: '预计上线',
                        value: '预计上线'
                    },
                ],
                form: {
                    currWeeks: [{
                        index: 1,
                        currWeek: '',
                        behavior: '',
                        behaviorDate: '',
                        project: '',
                        percent: ''
                    }],
                    nextWeeks: [{
                        index: 1,
                        currWeek: '',
                        behavior: '',
                        behaviorDate: '',
                        project: '',
                        percent: ''
                    }]
                },
                resultStr:
                    '示例: \n\n' +
                    '本周工作安排：\n' +
                    '1、XXX-project：新增XXX接口,提测时间：11-25;\n' +
                    '下周工作安排：\n' +
                    '1、XXX-project：XXX接口开发,预计提测时间：12-04;\n\n' +
                    '-----------------我是分隔线----------------\n\n' +
                    '本周工作安排：\n' +
                    '{currWeek}' +
                    '下周工作安排：\n' +
                    '{nextWeek} \n'
            }
        },

        computed: {
            result() {
                let currWeek = '';
                let nextWeek = '';
                const that = this;
                const form = this.form;
                form.currWeeks.forEach(function (e, index) {
                    if (e) {
                        currWeek += that.appendStr(e, index, form.currWeeks.length);
                    }
                })
                form.nextWeeks.forEach(function (e, index) {
                    if (e) {
                        nextWeek += that.appendStr(e, index, form.nextWeeks.length);
                    }
                })
                return this.resultStr
                    .replace("{currWeek}", currWeek)
                    .replace("{nextWeek}", nextWeek)
            }
        },

        methods: {
            dateFormat(obj) {
                return obj ? this.$moment(obj).format("YYYY-MM-DD") : obj;
            },
            dateFormat2(obj) {
                return obj ? this.$moment(obj).format("YYYY-MM-DD") : obj;
            },
            appendStr(obj, index, length) {
                if (length == 1 || length > (index + 1)) {
                    return `${(index + 1)}、${obj.project ? (obj.project + ':') : ''}${obj.currWeek ? (obj.currWeek ) : ''}${obj.percent ? (',完成'+ obj.percent): ''}${obj.behavior ? (',' + obj.behavior ) : ''}${obj.behaviorDate ? ('时间: ' + this.dateFormat(obj.behaviorDate)) : ''}; \n`;
                }
                return `${(index + 1)}、${obj.project ? (obj.project + ':') : ''}${obj.currWeek ? (obj.currWeek ) : ''}${obj.percent ? (',完成'+ obj.percent): ''}${obj.behavior ? (',' + obj.behavior ) : ''}${obj.behaviorDate ? ('时间: ' + this.dateFormat(obj.behaviorDate)) : ''}。 \n`;
            },
            addWeekly(obj) {
                obj.push({
                    key: Date.now(),
                    currWeek: '',
                    behavior: '',
                    behaviorDate: '',
                    project: '',
                    percent: ''
                });
            },
            removeWeekly(item, obj) {
                const index = obj.indexOf(item)
                if (index !== -1) {
                    obj.splice(index, 1)
                }
            },
        }
    }
</script>

<style scoped>

</style>
