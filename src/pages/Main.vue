<template>
    <el-container>
        <el-col :span="1"/>
        <el-col :span="10">
            <el-form ref="form" :model="form" :label-position="left" label-width="80px">
                <el-form-item label="加班人员">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="是否晚餐">
                    <el-select v-model="form.dinner" placeholder="请选择" style="width: 100%;">
                        <el-option label="是" value="是"></el-option>
                        <el-option label="否" value="否"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="开始时间">
                    <el-date-picker type="datetime" placeholder="选择日期" v-model="form.startTime"
                                    style="width: 100%;" format="yyyy-MM-dd HH:mm"></el-date-picker>
                </el-form-item>

                <el-form-item label="结束时间">
                    <el-date-picker type="datetime" placeholder="选择日期" v-model="form.endTime"
                                    style="width: 100%;" format="yyyy-MM-dd HH:mm"></el-date-picker>
                </el-form-item>
                <el-form-item label="加班属性">
                    <el-select v-model="form.type" placeholder="请选择" style="width: 100%;">
                        <el-option label="工作日" value="工作日"></el-option>
                        <el-option label="公休日" value="公休日"></el-option>
                        <el-option label="法定节假日" value="法定节假日"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="申请事由">
                    <el-input v-model="form.forWhat"></el-input>
                </el-form-item>
                <el-form-item label="加班项目">
                    <el-input v-model="form.project"></el-input>
                </el-form-item>
                <el-form-item label="工作事项">
                    <el-input type="textarea" v-model="form.arrange"></el-input>
                </el-form-item>
                <el-form-item label="输出结果">
                    <el-input type="textarea" v-model="form.result"></el-input>
                </el-form-item>
                <el-form-item label="达标要求">
                    <el-input type="textarea" v-model="form.standard"></el-input>
                </el-form-item>
                <el-form-item label="交付时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.deliveryDate"
                                    style="width: 100%;" format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
            </el-form>
        </el-col>
        <el-col :span="2"/>
        <el-col :span="8">
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
        name: "Main",
        data() {
            return {
                form: {
                    name: '',
                    startTime: '',
                    endTime: '',
                    type: '',
                    forWhat: '',
                    project: '',
                    arrange: '',
                    result: '',
                    standard: '',
                    deliveryDate: '',
                    dinner: ''
                },
                resultStr:
                    '示例: \n\n' +
                    '加班人姓名：XXX \n\n' +
                    '是否晚餐: 否 \n' +
                    '计划加班开始时间：9月19日08:31\n' +
                    '计划加班结束时间：9月19日18:39\n' +
                    '加班日属性：公休日\n' +
                    '申请事由：项目紧急上线，时间非常紧迫需加班。\n' +
                    '加班项目：xxx-project、xxx-project\n' +
                    '具体安排的工作事项：开发新XXX1接口、XXX2接口、XXX3接口；\n' +
                    '输出结果：XXX1接口、XXX2接口、XXX3接口已开发完成。\n' +
                    '达标要求：完成XXX1接口、XXX2接口、XXX3接口的开发。\n' +
                    '交付时间：9月19日\n' +
                    '----------------------我是分隔线---------------------\n\n' +
                    '加班人姓名：{name}\n' +
                    '是否晚餐: {dinner} \n' +
                    '计划加班开始时间：{startTime}\n' +
                    '计划加班结束时间：{endTime}\n' +
                    '加班日属性：{type}\n' +
                    '申请事由：{forWhat},时间非常紧迫需加班。\n' +
                    '加班项目：{project}\n' +
                    '具体安排的工作事项：{arrange}。\n' +
                    '输出结果：{result}。\n' +
                    '达标要求：{standard}。\n' +
                    '交付时间：{deliveryDate}\n'
            }
        },

        computed: {
            result() {
                const form = this.form
                console.log()
                return this.resultStr
                    .replace("{name}", form.name)
                    .replace("{dinner}", form.dinner)
                    .replace("{startTime}", this.dateFormat(form.startTime))
                    .replace("{endTime}", this.dateFormat(form.endTime))
                    .replace("{type}", form.type)
                    .replace("{forWhat}", form.forWhat)
                    .replace("{project}", form.project)
                    .replace("{arrange}", form.arrange)
                    .replace("{result}", form.result)
                    .replace("{standard}", form.standard)
                    .replace("{deliveryDate}", this.dateFormat2(form.deliveryDate))
            }
        },

        methods: {
            dateFormat(obj) {
                return obj ? this.$moment(obj).format("YYYY-MM-DD HH:mm") : obj;
            },
            dateFormat2(obj) {
                return obj ? this.$moment(obj).format("YYYY-MM-DD") : obj;
            }
        }
    }
</script>

<style scoped>

</style>
