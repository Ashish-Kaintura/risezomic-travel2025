import React from 'react'
import { AlertCircle, Home, ArrowLeft } from 'lucide-react'

export default function ErrorPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
            <div className="text-center max-w-md">
                {/* Error Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-red-500/20 rounded-full blur-2xl"></div>
                        <AlertCircle className="w-24 h-24 text-red-500 relative" />
                    </div>
                </div>

                {/* Error Code */}
                <h1 className="text-6xl font-bold text-white mb-2">404</h1>
                
                {/* Error Title */}
                <h2 className="text-2xl font-semibold text-white mb-4">
                    Page Not Found
                </h2>

                {/* Error Description */}
                <p className="text-slate-400 mb-8 leading-relaxed">
                    Sorry, the page you're looking for doesn't exist or has been moved. Let's get you back on track.
                </p>

                {/* Action Buttons */}
                <div className="flex gap-4 justify-center">
                    <button
                        onClick={() => window.history.back()}
                        className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Go Back
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg transition-colors duration-200"
                    >
                        <Home className="w-4 h-4" />
                        Home
                    </button>
                </div>

                {/* Decorative Elements */}
                <div className="mt-12 pt-8 border-t border-slate-700">
                    <p className="text-xs text-slate-500">Error Code: 404</p>
                </div>
            </div>
        </div>
    )
}
