import {
	GetAccountInfoAccountIdParams,
	GetAccountInfoAccountIdResult,
	getAuthorization,
	PostGetSmsCodeParams,
	PostGetSmsCodeResult,
	PostSignUpOrInParams,
	PostSignUpOrInResult,
	request
} from '@/api';

export class BaseApi {
	/**
	 * 注册&登录
	 * @param params
	 */
	static signUpOrIn(params: PostSignUpOrInParams) {
		return request.post<PostSignUpOrInResult, PostSignUpOrInResult>(
			`/v1/signUpOrIn`,
			params
		);
	}

	/**
	 * 获取短信验证码
	 * @param params
	 */
	static getSmsCode(params: PostGetSmsCodeParams) {
		return request.post<PostGetSmsCodeResult, PostGetSmsCodeResult>(
			`/v1/getSmsCode`,
			params
		);
	}

	/**
	 * 用户信息获取
	 * @param params
	 */
	static getAccountInfo(params?: GetAccountInfoAccountIdParams) {
		const url = params?.accountId
			? `/v1/accountInfo/${params.accountId}`
			: `/v1/accountInfo`;
		return request.get<
			GetAccountInfoAccountIdResult,
			GetAccountInfoAccountIdResult
		>(url, {
			headers: {
				Authorization: getAuthorization()
			}
		});
	}
}
