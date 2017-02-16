class Article < ApplicationRecord
  belongs_to :user

  enum status: { draft: 0, publishd: 1 }

  acts_as_taggable_on :labels
  acts_as_taggable
end
