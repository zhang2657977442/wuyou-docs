import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  MessageSquare,
  MapPin,
  Users,
  FileText,
  Building,
  Star,
  Eye,
  Briefcase,
  Bell,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScrollLink from "@/components/scroll-link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex items-center gap-2 md:mr-6">
            <Image
              src="/images/logo.png"
              alt="无忧直聘 Logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span className="hidden font-bold sm:inline-block">无忧直聘</span>
          </div>
          <nav className="flex flex-1 items-center justify-between space-x-2 md:justify-end md:space-x-4">
            <div className="hidden md:flex md:items-center md:gap-6">
              <ScrollLink
                href="#features"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                功能模块
              </ScrollLink>
              <ScrollLink
                href="#screenshots"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                项目截图
              </ScrollLink>
              <ScrollLink
                href="#contact"
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                联系方式
              </ScrollLink>
            </div>
            <div className="flex items-center gap-6">
              <Button size="sm">
                <Link
                  href="https://gitee.com/zsj265/wuyou-frontend"
                  target="_blank"
                >
                  前端源码
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-muted/50 to-muted">
          <div className="container">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    无忧直聘小程序
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    一款基于uni-app编写的招聘求职类小程序，包含求职者和招聘者双重角色，实现了核心招聘功能。
                  </p>
                  <p className="max-w-[600px] text-primary md:text-xl">
                    无忧直聘前端（Uni-app+Vue2）免费
                  </p>
                  <p className="max-w-[600px] text-primary md:text-xl">
                    无忧直聘后端（Java+SpringBoot2+MybatisPlus+Mysql）收费
                  </p>
                  <p className="max-w-[600px] text-primary md:text-xl">
                    无忧直聘管理端（React+Ant Design+Ant Design Pro）收费
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  {/* <Button
                    variant="outline"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  ><Link href="https://gitee.com/zsj265/wuyou-frontend" target="_blank">
                      获取前端源码
                    </Link>
                  </Button> */}
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    <Link href="http://47.95.245.28" target="_blank">
                      管理端体验（账号密码：admin）
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="rounded-xl border bg-background p-6 shadow-md space-y-4 w-full max-w-md">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">价格</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-primary">
                        299元
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        499元
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        （含详细运行步骤）
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      前端免费，后端+管理端源码特惠价
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">联系方式</h3>
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="text-sm font-bold">Q</span>
                        </span>
                        <span>QQ: 2657977449</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <span className="text-sm font-bold">W</span>
                        </span>
                        <span>微信: zhang2657977449</span>
                      </div>
                      <div className="flex gap-2">
                        <Image
                          src="/images/qq.jpg"
                          alt="联系方式"
                          width={150}
                          height={150}
                        />
                        <Image
                          src="/images/wechat.jpg"
                          alt="联系方式"
                          width={150}
                          height={150}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  功能模块
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  丰富的招聘求职功能
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  前端分为求职者和招聘者两种角色，通过角色切换可以进行页面和功能的切换
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Briefcase className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">职位发布</h3>
                  <p className="text-center text-muted-foreground">
                    招聘者可以发布职位信息，设置薪资、要求等
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <FileText className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">简历创建</h3>
                  <p className="text-center text-muted-foreground">
                    求职者可以创建个人简历，展示自己的技能和经验
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Building className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">公司创建</h3>
                  <p className="text-center text-muted-foreground">
                    招聘者可以创建和管理公司信息
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <MessageSquare className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">即时通讯</h3>
                  <p className="text-center text-muted-foreground">
                    利用GoEasy实现求职者与招聘者的即时沟通
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <MapPin className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">地理位置</h3>
                  <p className="text-center text-muted-foreground">
                    利用腾讯位置服务实现地理位置相关功能
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Users className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">角色切换</h3>
                  <p className="text-center text-muted-foreground">
                    可在求职者和招聘者角色之间自由切换
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Star className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">收藏功能</h3>
                  <p className="text-center text-muted-foreground">
                    支持收藏岗位和收藏简历功能
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Eye className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">谁看过我</h3>
                  <p className="text-center text-muted-foreground">
                    查看谁浏览过你的简历或职位信息
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <Bell className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold">系统通知</h3>
                  <p className="text-center text-muted-foreground">
                    接收应用重要更新和活动的系统通知
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
          id="screenshots"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  项目截图
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  无忧直聘小程序界面展示
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/screenshot1.png"
                    alt="无忧直聘小程序首页截图"
                    width={280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/screenshot2.png"
                    alt="无忧直聘小程序职位列表截图"
                    width={280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/screenshot3.png"
                    alt="无忧直聘小程序消息中心截图"
                    width={280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/screenshot4.png"
                    alt="无忧直聘小程序个人中心截图"
                    width={280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/screenshot5.png"
                    alt="无忧直聘小程序公司详情截图"
                    width={280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/screenshot6.png"
                    alt="无忧直聘小程序简历编辑截图"
                    width={280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  项目截图
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  管理端界面展示
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-1">
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "1280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/admin1.png"
                    alt="无忧直聘小程序管理端截图"
                    width={1280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "1280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/admin2.png"
                    alt="无忧直聘小程序管理端截图"
                    width={1280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "1280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/admin3.png"
                    alt="无忧直聘小程序管理端截图"
                    width={1280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  项目截图
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  数据模型展示
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-1">
              <div className="overflow-hidden rounded-xl border bg-background shadow-xl flex items-center justify-center p-2">
                <div
                  className="relative w-full"
                  style={{ maxWidth: "1280px", margin: "0 auto" }}
                >
                  <Image
                    src="/images/data.png"
                    alt="无忧直聘小程序数据模型截图"
                    width={1280}
                    height={560}
                    className="w-auto h-auto mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full py-12 md:py-24 lg:py-32 bg-muted/50"
          id="contact"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    项目列表
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    完整的无忧直聘项目包含三个部分
                  </p>
                </div>
                <ul className="grid gap-6">
                  <li className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-medium leading-none">
                        无忧直聘前端(Uni-app+Vue2)
                      </p>
                      <p className="text-sm text-muted-foreground">免费</p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-medium leading-none">
                        无忧直聘后端(Java+SpringBoot2+MybatisPlus+Mysql)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        收费，个人从零开发
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-medium leading-none">
                        无忧直聘管理端(React+Ant Design+Ant Design Pro)
                      </p>
                      <p className="text-sm text-muted-foreground">
                        收费，个人从零开发
                      </p>
                    </div>
                  </li>
                </ul>
                {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                    <Link href="http://admin.wuyoujobs.com" target="_blank">
                      管理端体验 (账号：admin 密码：admin)
                    </Link>
                  </Button>
                </div> */}
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    联系方式
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    如需后端和管理端源码请联系
                  </p>
                </div>
                <div className="grid gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-lg font-bold">¥</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-medium leading-none">价格</p>
                      <p className="text-sm text-muted-foreground">
                        <span className="line-through">499元</span> 299元
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-lg font-bold">Q</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-medium leading-none">QQ</p>
                      <p className="text-sm">2657977449</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <span className="text-lg font-bold">W</span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-lg font-medium leading-none">微信</p>
                      <p className="text-sm">zhang2657977449</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">其他项目</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  原创集
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold">
                  <Link href="https://gitee.com/zsj265/lottery" target="_blank">
                      抽奖小程序/云开发
                    </Link>
                  </h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold">持续更新中...</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold">持续更新中...</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex flex-col items-center justify-center p-6">
                  <h3 className="text-xl font-bold">持续更新中...</h3>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center">
              <p className="text-center text-lg"></p>
            </div>
          </div>
        </section> */}
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full border-t items-center justify-center px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © 2025 无忧直聘.
        </p>
      </footer>
    </div>
  );
}
