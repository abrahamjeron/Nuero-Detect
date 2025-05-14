"use client"

import { Brain } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ContactForm from "@/components/contact-form"
import FeatureCard from "@/components/feature-card"
import ModelSection from "@/components/model-section"
import NeuronBackground from "@/components/neuron-background"
import barins from '../public/barins.webp'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="pl-[70px] pr-[60px]"> {/* Added padding-left to move content */}
        <NeuronBackground />
        <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
          <div className="container flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">Neuro Clarity</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <Link href="#overview" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Overview
              </Link>
              <Link href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="#models" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Models
              </Link>
              <Link href="#applications" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Applications
              </Link>
              <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex-1">
          <section className="py-12 md:py-20 bg-gradient-to-b from-white to-blue-50">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600">
                    Early Detection of Alzheimer's Disease
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    NEURO DETECT: AI-Powered Alzheimer's Detection
                  </h1>
                  <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Early detection of Alzheimer's disease using deep learning AI, with feed-forward neural networks and
                    MRI integration.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link
                      href="#contact"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="#overview"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    src={barins}
                    width={400}
                    height={400}
                    alt="Brain scan visualization"
                    className="rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="overview" className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600">
                  Project Overview
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Abstract</h2>
              </div>
              <div className="mx-auto mt-8 max-w-3xl text-center">
                <p className="text-gray-500 md:text-xl/relaxed">
                  Alzheimer's disease (AD) is a progressive neurodegenerative disorder marked by cognitive decline and
                  memory loss, with early detection being critical for effective intervention. This project proposes a
                  robust deep learning-based framework that integrates the strengths of multimodal imaging and advanced
                  neural network architectures to classify AD into distinct stages.
                </p>
                <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                  By leveraging T1-weighted MRI and DTI data, the system utilizes a hybrid model architecture combining
                  convolutional neural networks (CNNs), feed-forward layers, and ensemble methods like DenseNet and
                  YOLOv11 for both classification and biomarker localization. The system achieves superior performance
                  with accuracies exceeding 93%.
                </p>
              </div>
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="rounded-full bg-blue-100 p-3">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold">Deep Learning</h3>
                  <p className="text-center text-sm text-gray-500">
                    Utilizes advanced neural networks for accurate detection and classification
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="rounded-full bg-blue-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">MRI Integration</h3>
                  <p className="text-center text-sm text-gray-500">
                    Processes T1-weighted MRI and DTI data for comprehensive analysis
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="rounded-full bg-blue-100 p-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M9 15v-2" />
                      <path d="M12 15v-6" />
                      <path d="M15 15v-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold">Early Detection</h3>
                  <p className="text-center text-sm text-gray-500">
                    Enables early intervention with high accuracy classification of AD stages
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="features" className="py-12 md:py-20 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  System Design
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Features & Capabilities</h2>
                <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                  Our system processes T1-weighted MRI (and DTI where applicable) through a deep learning pipeline
                  involving image preprocessing, feature extraction, and classification.
                </p>
              </div>
              <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                <FeatureCard
                  title="Multimodal Imaging"
                  description="Integration of MRI + DTI for richer feature representation"
                />
                <FeatureCard
                  title="Deep CNNs"
                  description="Use of deep CNNs and ensemble networks for improved accuracy and robustness"
                />
                <FeatureCard
                  title="Automated ROI Detection"
                  description="Stage-wise classification with minimal manual input"
                />
                <FeatureCard title="High Accuracy" description="Superior performance with accuracies exceeding 93%" />
                <FeatureCard
                  title="Comprehensive Analysis"
                  description="Detection of both structural and microstructural brain changes"
                />
                <FeatureCard
                  title="Clinical Relevance"
                  description="Scalable, accurate, and clinically relevant solution for Alzheimer's diagnosis"
                />
              </div>
            </div>
          </section>

          <section id="models" className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600">
                  Technical Details
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Neural Network Models</h2>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-2">
                <ModelSection
                  title="Feed-Forward Neural Network (FFNN)"
                  description="Feed-Forward Neural Networks (FFNN) are used for mapping input data to output through one or more hidden layers. Each neuron in a layer connects to all neurons in the next, without loops. FFNN is effective for classification tasks as it can capture complex relationships between features."
                  steps={[
                    "The input data is fed into the input layer",
                    "Data passes through hidden layers where weights are applied, and activations are computed",
                    "The activation function (like ReLU) introduces non-linearity to model complex relationships",
                    "The output layer generates the final classification result",
                    "The backpropagation algorithm adjusts weights based on errors between predicted and actual outcomes",
                  ]}
                />
                <ModelSection
                  title="Convolutional Neural Network (CNN)"
                  description="Convolutional Neural Networks (CNNs) are specialized for processing image data by automatically extracting spatial features through convolutional layers. They use filters to detect patterns like edges, textures, and shapes in images."
                  steps={[
                    "Input image is passed through convolutional layers where filters extract low-level features",
                    "Feature maps are generated, capturing spatial hierarchies and patterns",
                    "Pooling layers down-sample the feature maps to reduce dimensions and preserve important features",
                    "Flattening converts the pooled feature maps into a 1D vector for classification",
                    "The fully connected layers perform the final classification based on learned features",
                  ]}
                />
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 bg-white">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600">
                  Workflow
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Working Flow Diagram</h2>
              </div>
              <div className="mx-auto mt-12 max-w-3xl">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="space-y-4">
                    <div className="flex items-center justify-center rounded-md bg-blue-50 p-4">
                      <span className="font-medium text-blue-600">Start</span>
                    </div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-gray-400"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-blue-50 p-4">
                      <span className="font-medium text-blue-600">Input MRI Scans</span>
                    </div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-gray-400"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-blue-50 p-4">
                      <span className="font-medium text-blue-600">Preprocessing → Normalization, Augmentation</span>
                    </div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-gray-400"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-blue-50 p-4">
                      <span className="font-medium text-blue-600">Feature Extraction using CNN or DenseNet</span>
                    </div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-gray-400"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-blue-50 p-4">
                      <span className="font-medium text-blue-600">YOLOv11 → Biomarker Detection (optional)</span>
                    </div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-gray-400"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-blue-50 p-4">
                      <span className="font-medium text-blue-600">Flattening</span>
                    </div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-gray-400"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-blue-50 p-4">
                      <span className="font-medium text-blue-600">
                        Feed-Forward Neural Network → AD Stage Classification
                      </span>
                    </div>
                    <div className="flex justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-gray-400"
                      >
                        <path d="M12 5v14" />
                        <path d="m19 12-7 7-7-7" />
                      </svg>
                    </div>
                    <div className="flex items-center justify-center rounded-md bg-blue-50 p-4">
                      <span className="font-medium text-blue-600">Output Diagnosis with Score</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="applications" className="py-12 md:py-20 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Use Cases
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Applications</h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Early Detection</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Early detection of Alzheimer's disease in clinical settings using MRI and DTI scans
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Treatment Planning</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Stage-wise classification of AD to assist neurologists in treatment planning
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                      <path d="M12 3v6" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Screening Tool</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Automated screening tool in diagnostic centers for large-scale population health monitoring
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Research Support</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Research support for neuroscientists studying structural brain changes in AD
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
                      <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
                      <circle cx="20" cy="10" r="2" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Telemedicine</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Integration into telemedicine platforms for remote cognitive health assessment
                  </p>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M2 3h20" />
                      <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                      <path d="m7 21 5-5 5 5" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-lg font-bold">Educational Tool</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Educational tool for training medical students in neuroimaging-based diagnosis
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-12 md:py-20">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm text-blue-600">
                  Get in Touch
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h2>
                <p className="mt-4 text-gray-500 md:text-xl/relaxed">
                  Have questions about Neuro Clarity? We'd love to hear from you.
                </p>
              </div>
              <div className="mx-auto mt-12 max-w-lg">
                <ContactForm />
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20 bg-blue-50">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-3xl text-center">
                <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-sm text-blue-600">
                  Team
                </div>
                <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Project Team</h2>
              </div>
              <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">NV</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Nambi V C</h3>
                    <p className="text-sm text-gray-500">SIT23CS0198</p>
                    <p className="text-sm text-blue-600">sit23cs198@sairamtap.edu.in</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">SS</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Sudarsan S</h3>
                    <p className="text-sm text-gray-500">SIT23CS070</p>
                    <p className="text-sm text-blue-600">sit23cs070@sairamtap.edu.in</p>
                  </div>
                </div>
                <div className="flex flex-col items-center space-y-4 text-center">
                  <div className="h-24 w-24 rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-2xl font-bold text-blue-600">TS</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Tharunkumar S</h3>
                    <p className="text-sm text-gray-500">SIT23CS021</p>
                    <p className="text-sm text-blue-600">sit23cs021@sairamtap.edu.in</p>
                  </div>
                </div>
              </div>
              <div className="mx-auto mt-8 max-w-3xl text-center">
                <p className="text-gray-500">
                  <span className="font-medium">Under the guidance of:</span> Mr J Pathmanaban
                </p>
                <p className="text-gray-500">
                  <span className="font-medium">Institution:</span> Sri Sairam Institute of Technology
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t bg-white py-6">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-blue-600" />
                <span className="text-lg font-bold">Neuro Clarity</span>
              </div>
              <p className="text-center text-sm text-gray-500 md:text-left">
                &copy; {new Date().getFullYear()} Neuro Clarity. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
