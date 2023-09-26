---
author: Ekhfa Hossain
pubDatetime: 2023-06-01T04:59:04.866Z
title: Real-time traffic monitoring and traffic offense detection using YOLOv4 and OpenCV DNN
postSlug: real-time-traffic-monitoring-and-traffic-offense-detection-using-YOLOv4-and-OpenCV-DNN
featured: true
draft: false
tags:
  - tracking
  - computational modeling
  - neural networks
  - motorcycles
  - cameras
  - real-time systems
  - computer vision
  - deep learning
  - artificial intelligence
  - object detection
  - road traffic
  - road vehicles
  - traffic engineering computing
  - computer vision
  - object detection
  - vehicle detection
  - vehicle tracking
  - traffic offense detection
  - YOLOv4
  - YOLOv4-tiny
  - OpenCV
  - deep neural network

ogImage: ""
description: Real-time traffic monitoring and traffic offense detection using YOLOv4 and OpenCV DNN
---

## Table of contents

## Paper Link

[Full Paper](https://ieeexplore.ieee.org/document/9707406)

## Abstract

<p style='text-align: justify;'>
This paper presents a computer vision-based system for traffic offense detection. The system detects traffic offenses such as speed limit violations, unauthorized vehicles, traffic signal violations, unauthorized parking, wrong-way driving, and motorbike riders without helmets. The traffic offense detection system consists of a pipeline of four different modules. These are a vehicle detection module, a vehicle classification module, a vehicle tracking module, and a traffic offense detection module. Vehicles on the roads are detected in the vehicle detection module using visual data such as live camera feed. Next, after the vehicles are detected, they are classified into different classes using a vehicle classification module. A vehicle tracking module is developed to track the vehicle as it moves through the traffic. Lastly, we have implemented a traffic offense detection module that analyzes traffic patterns and detects different types of traffic violations in real-time. The entire system is implemented using OpenCV Deep Neural Network (DNN) module. We have used YOLOv4 to detect vehicles on the roads with high accuracy. For motorbike riders without helmets, we have used a fast YOLOv4-tiny model. The DeepSORT algorithm is used to track vehicles in real-time. Obtained accuracies are 86% in YOLOv4 for vehicle detection and 92% in YOLOv4-tiny for helmet detection.
</p>
