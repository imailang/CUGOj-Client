import axios from "./http";

/**
 * 获取所有评测
 */
function getJudgeList(params) {
    return axios.post('/judge/getjudgelist', params)
}

/**
 * 获取评测总数
 */
function getJudgeCount(params) {
    return axios.post('/judge/getjudgecount', params)
}
/**
 * 获取评测模板
 */
function getBaseJudge() {
    return axios.post('/judge/getbasejudge');
}
/**
 * 添加评测
 */
function addJudge(params) {
    return axios.post('/judge/addjudge', params)
}

/**
 * 获取比赛评测模板
 */
function getBaseContestJudge() {
    return axios.post('/judge/getbasecontestjudge');
}
/**
 * 添加比赛评测
 */
function addContestJudge(params) {
    return axios.post('/judge/addcontestjudge', params)
}

/**
 * 获取评测
 */
function getJudge(params) {
    return axios.post('/judge/getjudge', params)
}

/**
 * 获取评测运行状态
 */
function getJudgeStatus(params) {
    return axios.post('/judge/getjudgestatus', params)
}

/**
 * 获取比赛评测运行状态
 */
function getContestJudgeStatus(params) {
    return axios.post('/judge/getcontestjudgestatus', params)
}

/**
 * 获取比赛评测
 */
function getContestJudge(params) {
    return axios.post('/judge/getcontestjudge', params)
}

/**
 * 获取完整评测结果
 * @param params 评测ID
 * @returns {Promise<AxiosResponse<any>>} 完整评测结果
 */
function getJudgeFull(params) {
    return axios.post('/judge/getjudgefull', params)
}

/**
 * 获取完整评测结果
 * @param params 评测ID
 * @returns {Promise<AxiosResponse<any>>} 完整评测结果
 */
function getContestJudgeFull(params) {
    return axios.post('/judge/getcontestjudgefull', params)
}


/**
 * 获取比赛评测
 */
function getContestJudgeList(params) {
    return axios.post('/judge/getcontestjudgelist', params)
}

/**
 * 获取评测测试点信息
 */
function getJudgeCases(params) {
    return axios.post('/judge/getjudgecases', params);
}

export default {
    getBaseJudge,
    addJudge,
    getBaseContestJudge,
    addContestJudge,
    getContestJudge,
    getContestJudgeFull,
    getJudgeList,
    getJudgeCount,
    getJudge,
    getContestJudgeList,
    getJudgeFull,
    getJudgeCases,
    getJudgeStatus,
    getContestJudgeStatus,
}
