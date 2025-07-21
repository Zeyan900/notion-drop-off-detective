import { MetricCard } from "@/components/MetricCard";
import { FunnelChart } from "@/components/FunnelChart";
import { UserJourneyTimeline } from "@/components/UserJourneyTimeline";
import { InsightsPanel } from "@/components/InsightsPanel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar,
  Download,
  Filter,
  RefreshCw,
  Settings,
  BarChart3,
  Users,
  TrendingUp,
  Menu
} from "lucide-react";
import { metrics, funnelSteps, journeySteps, insights } from "@/data/sampleData";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-notion-50">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-primary rounded-lg">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-foreground">
                    Onboarding Analytics
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Drop-off Analysis Dashboard
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-success/10 text-success border-success/20">
                Live Data
              </Badge>
            </div>
            
            <div className="flex items-center gap-2">
              <nav className="hidden md:flex items-center gap-2 mr-4">
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm" className="bg-primary/10 text-primary">
                    Dashboard
                  </Button>
                </Link>
                <Link to="/settings">
                  <Button variant="ghost" size="sm">
                    Settings
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="ghost" size="sm">
                    Sign Up
                  </Button>
                </Link>
              </nav>
              
              <Button variant="outline" size="sm">
                <Calendar className="h-4 w-4 mr-2" />
                Last 30 days
              </Button>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm">
                <RefreshCw className="h-4 w-4 mr-2" />
                Refresh
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
              <Link to="/settings">
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-6 space-y-6">
        {/* Key Metrics */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 animate-fade-in">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              title={metric.title}
              value={metric.value}
              change={metric.change}
              description={metric.description}
              trend={metric.trend}
              variant={metric.variant}
            />
          ))}
        </section>

        {/* Funnel and Journey Analysis */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-slide-up">
          <FunnelChart steps={funnelSteps} />
          <UserJourneyTimeline steps={journeySteps} />
        </section>

        {/* Insights and Recommendations */}
        <section className="animate-fade-in">
          <InsightsPanel insights={insights} />
        </section>

        {/* Quick Actions */}
        <section className="bg-gradient-card rounded-lg p-6 shadow-notion">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="h-4 w-4" />
              <span>12,847 users analyzed</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Optimize Team Setup</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Address the biggest drop-off point
                </div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Simplify Profile Form</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Reduce form complexity and friction
                </div>
              </div>
            </Button>
            
            <Button variant="outline" className="justify-start h-auto p-4">
              <div className="text-left">
                <div className="font-medium">Review Tutorial Flow</div>
                <div className="text-xs text-muted-foreground mt-1">
                  Focus on core features first
                </div>
              </div>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;