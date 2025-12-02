-- CreateEnum
CREATE TYPE "BrainType" AS ENUM ('WEBSITE', 'API', 'DOC', 'LOG', 'STATUS_PAGE');

-- CreateEnum
CREATE TYPE "MonitorType" AS ENUM ('UPTIME', 'PERFORMANCE', 'REPORT');

-- CreateEnum
CREATE TYPE "MonitorStatus" AS ENUM ('ACTIVE', 'PAUSED', 'FAILED');

-- CreateEnum
CREATE TYPE "IncidentStatus" AS ENUM ('OPEN', 'RESOLVED', 'INVESTIGATING');

-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateEnum
CREATE TYPE "PlanType" AS ENUM ('HOBBY', 'PRO', 'ENTERPRISE');

-- CreateEnum
CREATE TYPE "IntegrationType" AS ENUM ('SLACK', 'DATADOG');

-- CreateTable
CREATE TABLE "BrainItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "url" TEXT,
    "favicon" TEXT,
    "type" "BrainType" NOT NULL,
    "tags" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BrainItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Monitor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "MonitorType" NOT NULL,
    "url" TEXT,
    "method" TEXT NOT NULL DEFAULT 'GET',
    "frequency" TEXT NOT NULL DEFAULT '5 min',
    "status" "MonitorStatus" NOT NULL DEFAULT 'ACTIVE',
    "lastRun" TIMESTAMP(3),
    "nextRun" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Monitor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LatencyLog" (
    "id" TEXT NOT NULL,
    "latency" INTEGER NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "monitorId" TEXT NOT NULL,

    CONSTRAINT "LatencyLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UptimeLog" (
    "id" TEXT NOT NULL,
    "isUp" BOOLEAN NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "monitorId" TEXT NOT NULL,

    CONSTRAINT "UptimeLog_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incident" (
    "id" TEXT NOT NULL,
    "status" "IncidentStatus" NOT NULL DEFAULT 'OPEN',
    "severity" "Severity" NOT NULL DEFAULT 'HIGH',
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "resolvedAt" TIMESTAMP(3),
    "rootCause" TEXT,
    "postMortem" TEXT,
    "monitorId" TEXT NOT NULL,

    CONSTRAINT "Incident_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subscription" (
    "id" TEXT NOT NULL,
    "plan" "PlanType" NOT NULL DEFAULT 'HOBBY',
    "status" TEXT NOT NULL,
    "stripeCustomerId" TEXT,
    "stripeSubscriptionId" TEXT,
    "currentMonitorCount" INTEGER NOT NULL DEFAULT 0,
    "currentApiUsage" INTEGER NOT NULL DEFAULT 0,
    "currentPeriodStart" TIMESTAMP(3) NOT NULL,
    "currentPeriodEnd" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Invoice" (
    "id" TEXT NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,
    "status" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "pdfUrl" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Invoice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "theme" TEXT NOT NULL DEFAULT 'system',
    "emailAlerts" BOOLEAN NOT NULL DEFAULT true,
    "slackNotifications" BOOLEAN NOT NULL DEFAULT true,
    "weeklyReport" BOOLEAN NOT NULL DEFAULT false,
    "marketingEmails" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Integration" (
    "id" TEXT NOT NULL,
    "type" "IntegrationType" NOT NULL,
    "config" JSONB,
    "isEnabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Integration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LatencyLog_monitorId_timestamp_idx" ON "LatencyLog"("monitorId", "timestamp");

-- AddForeignKey
ALTER TABLE "LatencyLog" ADD CONSTRAINT "LatencyLog_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UptimeLog" ADD CONSTRAINT "UptimeLog_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Incident" ADD CONSTRAINT "Incident_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
