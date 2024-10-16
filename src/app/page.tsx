import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import ShineBorder from "@/components/ui/shine-border";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import WordRotate from "@/components/ui/word-rotate";
import BetaForm from "@/components/betaform";

export default function Home() {
  return (
    <div className="p-5">
      <div className="flex">
      <Image src="/currency-animate.svg" width={350} height={400}alt="hero image" className="-translate-y-12 hidden lg:block"/>
      <div className="flex flex-col justify-center items-center space-y-5">
      <div className="font-bold text-center text-3xl">
      <span>Prenez de l'avance sur vos finances avec un suivi précis de vos</span><WordRotate words={[" dépenses.","revenus.","budgets."]}/>
      </div>
     <div>
     Suivez facilement vos dépenses, fixez des budgets, et recevez des analyses précises pour améliorer vos finances. Entrez votre email et soyez le premier à tester les fonctionnalités gratuitement.
     </div>
     <BetaForm/>
     
      </div>
      <Image src="/Conversion rate optimization-amico(2).svg" width={300} height={350}alt="hero image" className="hidden p-4 translate-y-12 lg:block"
      layout="intrinsic"/>
    </div>
    <div className="flex flex-col gap-5 p-5">
      <h1 className="text-xl font-bold">Fonctionnalités</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          <ShineBorder  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card className=" text-center border-none w-full h-full p-5 box-border space-y-2">
              <CardTitle>
              Gestion des Budgets Personnalisés
              </CardTitle>
              <CardContent>
              Definissez des budgets pour différentes catégories (alimentation, loisirs, etc.) et de recevoir des alertes lorsqu'ils sont presque dépassés.
              </CardContent>
            </Card>
          </ShineBorder>
          <ShineBorder  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card className=" text-center border-none w-full h-full p-5 box-border space-y-2">
              <CardTitle>
              Suivi des Dépenses en Temps Réel
              </CardTitle>
              <CardContent>
              Enregistrez et classez automatiquement chaque dépense, avec une vue d'ensemble quotidienne, hebdomadaire ou mensuelle.
              </CardContent>
            </Card>
          </ShineBorder>
          <ShineBorder  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card className=" text-center border-none w-full h-full p-5 box-border space-y-2">
              <CardTitle>
              Rapports Financiers et Analyses
              </CardTitle>
              <CardContent>
              Obtenez des graphiques et des rapports détaillés pour comprendre et analyser vos habitudes de dépenses et optimiser vos finances.
              </CardContent>
            </Card>
          </ShineBorder>
          <ShineBorder  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
            <Card className=" text-center border-none w-full h-full p-5 box-border space-y-2">
              <CardTitle>
              Notifications et Rappels
              </CardTitle>
              <CardContent>
              Envoie des rappels pour les paiements à venir et des notifications sur les transactions importantes ou des anomalies dans les dépenses.
              </CardContent>
            </Card>
          </ShineBorder>
        </div>
    </div>
    </div>
  );
}
