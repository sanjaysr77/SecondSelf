import { Link } from 'react-router-dom';
import { Brain, Zap, Lock, Search, Network, Sparkles } from 'lucide-react';

export default function Landing() {
    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-slate-100">
            <header className="fixed w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-2">
                            <Brain className="w-8 h-8 text-blue-600" />
                            <span className="text-2xl font-bold text-slate-900">SecondSelf</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <Link
                                to="/signin"
                                className="px-4 py-2 text-slate-700 hover:text-slate-900 font-medium transition-colors"
                            >
                                Sign In
                            </Link>
                            <Link
                                to="/signup"
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all transform hover:scale-105 shadow-lg shadow-blue-200"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <main className="pt-20">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
                    <div className="text-center">
                        <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 animate-pulse">
                            <Sparkles className="w-4 h-4" />
                            <span className="text-sm font-medium">Your Personal Knowledge Assistant</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                            Build Your
                            <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-cyan-600"> Second Brain</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                            Capture, organize, and connect your thoughts effortlessly. SecondSelf helps you remember everything that matters and surfaces insights when you need them.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                to="/signup"
                                className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold text-lg transition-all transform hover:scale-105 shadow-xl shadow-blue-300 w-full sm:w-auto"
                            >
                                Start Building Free
                            </Link>
                            <button className="px-8 py-4 bg-white text-slate-700 rounded-lg hover:bg-slate-50 font-semibold text-lg transition-all border-2 border-slate-200 w-full sm:w-auto">
                                Watch Demo
                            </button>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                            Everything You Need
                        </h2>
                        <p className="text-xl text-slate-600">
                            Powerful features designed for the way you think
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast Capture</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Instantly capture thoughts, ideas, and notes from anywhere. Never lose a brilliant idea again.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                                <Search className="w-6 h-6 text-cyan-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Intelligent Search</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Find exactly what you need in seconds with AI-powered semantic search across all your notes.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                                <Network className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Connected Thinking</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Discover hidden connections between your ideas with automatic linking and knowledge graphs.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                                <Lock className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Private & Secure</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Your thoughts are yours alone. End-to-end encryption keeps your second brain completely private.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                                <Brain className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Smart Suggestions</h3>
                            <p className="text-slate-600 leading-relaxed">
                                AI-powered insights surface relevant notes and ideas right when you need them most.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6 text-pink-600" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">Beautiful Experience</h3>
                            <p className="text-slate-600 leading-relaxed">
                                A clean, distraction-free interface that helps you focus on what matters: your ideas.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="bg-linear-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 md:p-16 text-center shadow-2xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to Build Your Second Brain?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Join thousands of thinkers, creators, and learners who trust SecondSelf to organize their digital life.
                        </p>
                        <Link
                            to="/signup"
                            className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-blue-50 font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
                        >
                            Get Started for Free
                        </Link>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 mb-4 md:mb-0">
                            <Brain className="w-6 h-6 text-blue-400" />
                            <span className="text-xl font-bold text-white">SecondSelf</span>
                        </div>
                        <p className="text-sm">
                            © 2024 SecondSelf. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
