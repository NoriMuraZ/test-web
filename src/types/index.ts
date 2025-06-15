export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  description: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  parentId?: string;
  status: 'active' | 'inactive';
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  fullName: string;
  role: 'admin' | 'manager' | 'operator' | 'viewer';
  department: string;
  status: 'active' | 'inactive';
  lastLogin?: string;
  createdAt: string;
  updatedAt: string;
}

export type EntityType = 'products' | 'customers' | 'categories' | 'users';

export interface DashboardStats {
  totalProducts: number;
  totalCustomers: number;
  totalCategories: number;
  totalUsers: number;
  activeProducts: number;
  activeCustomers: number;
  activeUsers: number;
  recentlyUpdated: number;
}