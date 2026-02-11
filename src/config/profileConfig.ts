import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	// 头像
	// avatar: "/assets/images/avatar.webp",
	avatar: "/assets/images/ymqs.png",

	// 名字
	name: "远梦清思",

	// 个人签名
	bio: "给时光以生命，给岁月以文明",

	// 链接配置
	// 已经预装的图标集：fa7-brands，fa7-regular，fa7-solid，material-symbols，simple-icons
	// 访问https://icones.js.org/ 获取图标代码，
	// 如果想使用尚未包含相应的图标集，则需要安装它
	// `pnpm add @iconify-json/<icon-set-name>`
	// showName: true 时显示图标和名称，false 时只显示图标
	links: [
		{
			name: "Bilibli",
			icon: "fa7-brands:bilibili",
			url: "https://space.bilibili.com/425658323",
			showName: false,
		},
		{
			name: "Zhihu",
			icon: "fa7-brands:zhihu",
			url: "https://www.zhihu.com/people/timo-92-94",
		},
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/TimoZhou1024",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:si.yuanzhou1024@gmail.com",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
