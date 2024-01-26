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

export function Hero() {
    return (
        <section className='flex flex-col  items-center'>
            <div className='flex flex-col items-center gap-4'>
                <Tabs defaultValue="registrar" className="w-[400px] border shadow-xl rounded-md overflow-hidden">
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
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="Pedro Duarte" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" defaultValue="@peduarte" />
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
                                    <Label htmlFor="current">Current password</Label>
                                    <Input id="current" type="password" />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="new">New password</Label>
                                    <Input id="new" type="password" />
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button>Entrar</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>

                {/* <Button className='max-w-max'>Criar conta</Button>
                <p>Já possui uma conta? <span className=' font-bold'><Link href="/entrar">Entrar</Link></span></p> */}
            </div>
        </section>
    )
}