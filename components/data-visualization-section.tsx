"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Droplets, Fuel, Wind } from "lucide-react"

export function DataVisualizationSection() {
  const [activeTab, setActiveTab] = useState("fuel")

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4 text-primary">Real-Time Analytics Dashboard</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Monitor your fleet performance with interactive data visualizations and AI-powered insights.
          </p>
        </motion.div>

        <Card className="border-2 border-secondary/10">
          <Tabs defaultValue="fuel" value={activeTab} onValueChange={setActiveTab}>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Fleet Performance Analytics</CardTitle>
                <TabsList>
                  <TabsTrigger value="fuel">Fuel Efficiency</TabsTrigger>
                  <TabsTrigger value="weather">Weather Impact</TabsTrigger>
                  <TabsTrigger value="route">Route Comparison</TabsTrigger>
                </TabsList>
              </div>
              <CardDescription>
                {activeTab === "fuel" && "Analyze fuel consumption and savings with AI-optimized routes"}
                {activeTab === "weather" && "Monitor weather conditions affecting your maritime routes"}
                {activeTab === "route" && "Compare traditional vs. AI-optimized routes"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <TabsContent value="fuel" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Fuel Consumption</CardTitle>
                      <Fuel className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">102.5 tons</div>
                      <p className="text-xs text-muted-foreground">-15.3% from last month</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
                      <svg
                        className="h-4 w-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$42,850</div>
                      <p className="text-xs text-muted-foreground">+$12,450 from last month</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">CO2 Reduction</CardTitle>
                      <svg
                        className="h-4 w-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">132.4 tons</div>
                      <p className="text-xs text-muted-foreground">-10.2 tons from last month</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Efficiency Score</CardTitle>
                      <svg
                        className="h-4 w-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">87/100</div>
                      <p className="text-xs text-muted-foreground">+5 points from last month</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="h-[400px] bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Fuel className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Fuel Consumption Chart</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Bar chart showing traditional vs. optimized route fuel consumption over time
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="weather" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
                      <Wind className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">18 knots</div>
                      <p className="text-xs text-muted-foreground">Gusting to 25 knots</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Wave Height</CardTitle>
                      <Droplets className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2.5 meters</div>
                      <p className="text-xs text-muted-foreground">+0.3m from yesterday</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Weather Alerts</CardTitle>
                      <svg
                        className="h-4 w-4 text-muted-foreground"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4L7.5 8m9 4l-1.5-2.5M16 19h.01"
                        ></path>
                      </svg>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2 Active</div>
                      <p className="text-xs text-muted-foreground">North Atlantic region</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="h-[400px] bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Wind className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Weather Conditions Chart</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Line chart showing wind speed, wave height, and precipitation over time
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="route" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="h-[400px] bg-slate-100 dark:bg-slate-800 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <svg
                        className="h-16 w-16 text-primary mx-auto mb-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                        />
                      </svg>
                      <h3 className="text-xl font-bold mb-2">Route Comparison</h3>
                      <p className="text-muted-foreground max-w-md mx-auto">
                        Pie chart comparing traditional vs. optimized routes
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-6 text-primary">Route Efficiency Comparison</h3>

                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Distance</span>
                          <span className="text-green-600 font-medium">-12.5%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Fuel Consumption</span>
                          <span className="text-green-600 font-medium">-15.3%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">Travel Time</span>
                          <span className="text-green-600 font-medium">-8.7%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">CO2 Emissions</span>
                          <span className="text-green-600 font-medium">-14.2%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </div>
    </section>
  )
}

