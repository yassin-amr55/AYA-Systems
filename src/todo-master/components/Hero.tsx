import { CheckCircle, Calendar, Mic, Download } from 'lucide-react';
import PhoneMockup from './PhoneMockup';

export default function Hero() {
  return (
    <section id="download" className="relative min-h-screen flex items-center py-8 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Gradient blend to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-gray-50/30 to-gray-50 dark:from-transparent dark:via-slate-900/30 dark:to-slate-900 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Master your<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 bg-clip-text text-transparent">
                  management
                </span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl">
                Specialized local system in managing schools using AI.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">AI camera management</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">Attendance auto check</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 dark:from-orange-500 dark:to-red-500 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-700 dark:text-gray-300">AI info graph generation & management</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/app-debug.apk"
                download
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-orange-500 dark:to-red-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Download APK
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
