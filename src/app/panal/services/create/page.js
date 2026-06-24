'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import AdminGuard from '@/components/Admin/AdminGuard';
import FormField from '@/components/Admin/FormField';
import TextareaField from '@/components/Admin/TextareaField';
import SelectField from '@/components/Admin/SelectField';
import ImageUploader from '@/components/Admin/ImageUploader';
import Alert from '@/components/Admin/Alert';
import SubmitButton from '@/components/Admin/SubmitButton';
import api from '@/lib/axios';

const CATEGORIES = [
  { value: 'development', label: 'Development' },
  { value: 'design', label: 'Design' },
  { value: 'consulting', label: 'Consulting' },
  { value: 'support', label: 'Support' },
  { value: 'careers', label: 'Careers' },
];

export default function NewServicePage() {
  const router = useRouter();
  const [serverError, setServerError] = useState('');
  const [serverSuccess, setServerSuccess] = useState('');
  const [previewFiles, setPreviewFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '', slug: '', description: '',
      category: 'development', demoVideoUrl: '',
      isPublished: true, sortOrder: 0,
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setServerError('');
    setServerSuccess('');

    const formData = new FormData();
    formData.append('title', data.title);
    if (data.slug) formData.append('slug', data.slug);
    formData.append('description', data.description);
    formData.append('category', data.category);
    if (data.demoVideoUrl) formData.append('demoVideoUrl', data.demoVideoUrl);
    formData.append('isPublished', data.isPublished);
    formData.append('sortOrder', data.sortOrder);
    previewFiles.forEach((file, i) => {
      formData.append('previewImages', file);
      formData.append(`previewAlt_${i}`, `Preview ${i + 1}`);
    });

    try {
      const res = await api.post('/services', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setServerSuccess(`"${res.data.data.title}" created!`);
      setTimeout(() => router.push(`/products/${res.data.data.slug}`), 1500);
    } catch (err) {
      setServerError(err.response?.data?.error || 'Failed to create product');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AdminGuard>
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Add New Product</h1>
            <p className="mt-2 text-sm text-gray-600">Create a new product listing with images and demo video.</p>
          </div>

          <Alert type="error" message={serverError} />
          <Alert type="success" message={serverSuccess} />

          <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-6">
            <FormField label="Title" name="title" required error={errors.title} registration={register('title', { required: 'Title is required' })} placeholder="e.g., Custom CRM Solution" />
            <FormField label="Slug" name="slug" registration={register('slug')} placeholder="custom-crm (auto-generated if empty)" />

            <TextareaField label="Description" name="description" required rows={5} error={errors.description} registration={register('description', { required: 'Description is required', minLength: { value: 20, message: 'At least 20 characters' } })} placeholder="Describe the product in detail..." />

            <div className="grid sm:grid-cols-2 gap-6">
              <SelectField label="Category" name="category" required options={CATEGORIES} registration={register('category')} />
              <FormField label="Sort Order" name="sortOrder" type="number" registration={register('sortOrder')} placeholder="0" />
            </div>

            <FormField label="YouTube Demo URL" name="demoVideoUrl" type="url" registration={register('demoVideoUrl')} placeholder="https://youtu.be/..." />

            <ImageUploader onChange={setPreviewFiles} />

            <div className="flex items-center gap-3">
              <input type="checkbox" id="isPublished" {...register('isPublished')} className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
              <label htmlFor="isPublished" className="text-sm font-medium text-gray-700">Publish immediately</label>
            </div>

            <SubmitButton isSubmitting={isSubmitting} label="Create Product" loadingLabel="Creating..." onCancel={() => router.back()} />
          </form>
        </div>
      </div>
    </AdminGuard>
  );
}