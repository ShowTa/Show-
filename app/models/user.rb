class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :articles
  has_many :comments
  has_many :favorites

  mount_uploader :icon, IconUploader

  scope :writen_article, -> (user_id) { find(user_id) }
end
