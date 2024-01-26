import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/app/components/ui/card"
import { Input } from "@/app/components/ui/input"
import { Label } from "@/app/components/ui/label"
import { Button } from '@/app/components/ui/button'
import { LoginWithGithub } from './authComponents/LoginWithGithub'

export function Hero() {
    return (
        <section className='flex flex-col  items-center'>
            <div className='flex flex-col items-center gap-4'>
                <Tabs defaultValue="registrar" className="w-[400px] rounded-md">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="registrar">Registrar-se</TabsTrigger>
                        <TabsTrigger value="entrar">Entrar</TabsTrigger>
                    </TabsList>
                    <TabsContent value="registrar">
                        <Card>
                            <CardHeader>
                                <CardTitle>Crie sua conta</CardTitle>
                                <CardDescription>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit, ipsum.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">E-mail</Label>
                                    <Input id="name" placeholder="exemplo@gmail.com" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Senha</Label>
                                    <Input id="username" type="password" placeholder='******' />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Registrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                    <TabsContent value="entrar">
                        <Card>
                            <CardHeader>
                                <CardTitle>Acessar conta</CardTitle>
                                <CardDescription>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit, ipsum.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">E-mail</Label>
                                    <Input id="name" placeholder="exemplo@gmail.com" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Senha</Label>
                                    <Input id="username" type="password" placeholder='******' />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Entrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>

                <LoginWithGithub />
            </div>
        </section>
    )
}